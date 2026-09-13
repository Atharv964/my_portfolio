
import { useEffect, useMemo, useState } from "react";
import "./LeetCode.css";
import { leetcodeConfig } from "../data/leetcode";

const LeetCode = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `${leetcodeConfig.apiBaseUrl}/${leetcodeConfig.username}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }

        const result = await response.json();

        if (result.status !== "success") {
          throw new Error("LeetCode API returned an error");
        }

        setLeetcodeData(result);
      } catch (err) {
        console.error("LeetCode API Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  // Create last 365 days
  const calendarDays = useMemo(() => {
    if (!leetcodeData) return [];

    const submissionCalendar =
      leetcodeData.submissionCalendar ||
      leetcodeData.data?.submissionCalendar ||
      {};

    const submissionMap = {};

    Object.entries(submissionCalendar).forEach(([timestamp, count]) => {
      const date = new Date(Number(timestamp) * 1000);

      const key = [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
      ].join("-");

      submissionMap[key] = count;
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);

    while (startDate.getDay() !== 0) {
      startDate.setDate(startDate.getDate() - 1);
    }

    const days = [];
    const current = new Date(startDate);

    while (current <= today || days.length % 7 !== 0) {
      const key = [
        current.getFullYear(),
        String(current.getMonth() + 1).padStart(2, "0"),
        String(current.getDate()).padStart(2, "0"),
      ].join("-");

      days.push({
        date: new Date(current),
        count: submissionMap[key] || 0,
        key,
      });

      current.setDate(current.getDate() + 1);
    }

    return days;
  }, [leetcodeData]);

  // Split days into weeks
  const weeks = useMemo(() => {
    const result = [];

    for (let i = 0; i < calendarDays.length; i += 7) {
      result.push(calendarDays.slice(i, i + 7));
    }

    return result;
  }, [calendarDays]);

  // Month labels
  const monthLabels = useMemo(() => {
    if (!calendarDays.length) return [];

    const labels = [];
    const seenMonths = new Set();

    calendarDays.forEach((day, index) => {
      const monthKey = `${day.date.getFullYear()}-${day.date.getMonth()}`;

      if (!seenMonths.has(monthKey)) {
        seenMonths.add(monthKey);

        labels.push({
          label: day.date
            .toLocaleString("en-US", {
              month: "short",
            })
            .toUpperCase(),
          weekIndex: Math.floor(index / 7),
        });
      }
    });

    return labels;
  }, [calendarDays]);

  // Day labels
  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  // Submission level
  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 8) return 3;
    return 4;
  };

  // Total submissions
  const totalSubmissions = useMemo(() => {
    if (!calendarDays.length) return 0;

    return calendarDays.reduce((total, day) => {
      return total + day.count;
    }, 0);
  }, [calendarDays]);

  // Loading state
  if (loading) {
    return (
      <section className="leetcode-section" id="leetcode">
        <div className="leetcode-container">
          <div className="leetcode-card leetcode-loading">
            <span>Loading LeetCode activity...</span>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !leetcodeData) {
    return (
      <section className="leetcode-section" id="leetcode">
        <div className="leetcode-container">
          <div className="leetcode-card leetcode-error">
            <span>Unable to load LeetCode activity.</span>

            <a
              href={leetcodeConfig.profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              View profile →
            </a>
          </div>
        </div>
      </section>
    );
  }

  // API data
  const totalSolved =
    leetcodeData.totalSolved ??
    leetcodeData.data?.totalSolved ??
    0;

  const easySolved =
    leetcodeData.easySolved ??
    leetcodeData.data?.easySolved ??
    0;

  const mediumSolved =
    leetcodeData.mediumSolved ??
    leetcodeData.data?.mediumSolved ??
    0;

  const hardSolved =
    leetcodeData.hardSolved ??
    leetcodeData.data?.hardSolved ??
    0;

  const totalEasy =
    leetcodeData.totalEasy ??
    leetcodeData.data?.totalEasy ??
    0;

  const totalMedium =
    leetcodeData.totalMedium ??
    leetcodeData.data?.totalMedium ??
    0;

  const totalHard =
    leetcodeData.totalHard ??
    leetcodeData.data?.totalHard ??
    0;

  const acceptanceRate = Number(
    leetcodeData.acceptanceRate ??
      leetcodeData.data?.acceptanceRate ??
      0
  );

  const activeDays =
    leetcodeData.totalActiveDays ??
    leetcodeData.data?.totalActiveDays ??
    0;

  const ranking =
    leetcodeData.ranking ??
    leetcodeData.data?.ranking ??
    0;

  // Format rank
  const formattedRanking = ranking
    ? Number(ranking).toLocaleString("en-US")
    : "—";

  return (
    <section className="leetcode-section" id="leetcode">
      <div className="leetcode-container">

        {/* HEADER */}
        <div className="leetcode-header">
          <div>
            <p className="leetcode-eyebrow">
              CONSISTENCY
            </p>

            <h2>
              Showing up matters.
            </h2>
          </div>

          <div className="leetcode-header-meta">
            <div>
              <span className="header-number">
                {totalSubmissions}
              </span>

              <span className="header-label">
                SUBMISSIONS
              </span>
            </div>

            <div>
              <span className="header-number">
                {activeDays}
              </span>

              <span className="header-label">
                ACTIVE DAYS
              </span>
            </div>
          </div>
        </div>

        {/* CALENDAR */}
        <div className="leetcode-calendar-wrapper">
          <div className="activity-calendar">

            <div className="activity-months">
              {monthLabels.map((month, index) => (
                <span
                  key={`${month.label}-${index}`}
                  className="activity-month"
                  style={{
                    left: `${month.weekIndex * 17}px`,
                  }}
                >
                  {month.label}
                </span>
              ))}
            </div>

            <div className="activity-body">

              <div className="activity-day-labels">
                {dayLabels.map((label, index) => (
                  <span key={index}>
                    {label}
                  </span>
                ))}
              </div>

              <div className="activity-grid">
                {weeks.map((week) =>
                  week.map((day) => (
                    <div
                      key={day.key}
                      className={`activity-cell level-${getLevel(
                        day.count
                      )}`}
                      title={`${day.count} submission${
                        day.count === 1 ? "" : "s"
                      } on ${day.date.toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}`}
                    />
                  ))
                )}
              </div>

            </div>

            <div className="activity-legend">
              <span>LESS</span>

              <div className="legend-squares">
                <span className="activity-cell level-0" />
                <span className="activity-cell level-1" />
                <span className="activity-cell level-2" />
                <span className="activity-cell level-3" />
                <span className="activity-cell level-4" />
              </div>

              <span>MORE</span>
            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="leetcode-stats">

          {/* TOTAL */}
          <div className="leetcode-stat total-stat">
            <div className="stat-top">
              <span className="stat-label">
                TOTAL SOLVED
              </span>

              <span className="stat-value">
                {totalSolved}
              </span>
            </div>

            <div className="stat-progress">
              <span
                style={{
                  width: `${
                    totalEasy + totalMedium + totalHard
                      ? (totalSolved /
                          (totalEasy +
                            totalMedium +
                            totalHard)) *
                        100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>

          {/* EASY */}
          <div className="leetcode-stat">
            <div className="stat-top">
              <div>
                <span className="stat-label">
                  EASY
                </span>

                <span className="stat-count">
                  {easySolved}
                  <small> / {totalEasy}</small>
                </span>
              </div>

              <span className="stat-percent">
                {totalEasy
                  ? Math.round(
                      (easySolved / totalEasy) * 100
                    )
                  : 0}
                %
              </span>
            </div>

            <div className="stat-progress">
              <span
                style={{
                  width: `${
                    totalEasy
                      ? (easySolved / totalEasy) * 100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>

          {/* MEDIUM */}
          <div className="leetcode-stat">
            <div className="stat-top">
              <div>
                <span className="stat-label">
                  MEDIUM
                </span>

                <span className="stat-count">
                  {mediumSolved}
                  <small> / {totalMedium}</small>
                </span>
              </div>

              <span className="stat-percent">
                {totalMedium
                  ? Math.round(
                      (mediumSolved / totalMedium) * 100
                    )
                  : 0}
                %
              </span>
            </div>

            <div className="stat-progress">
              <span
                style={{
                  width: `${
                    totalMedium
                      ? (mediumSolved / totalMedium) * 100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>

          {/* HARD */}
          <div className="leetcode-stat">
            <div className="stat-top">
              <div>
                <span className="stat-label">
                  HARD
                </span>

                <span className="stat-count">
                  {hardSolved}
                  <small> / {totalHard}</small>
                </span>
              </div>

              <span className="stat-percent">
                {totalHard
                  ? Math.round(
                      (hardSolved / totalHard) * 100
                    )
                  : 0}
                %
              </span>
            </div>

            <div className="stat-progress">
              <span
                style={{
                  width: `${
                    totalHard
                      ? (hardSolved / totalHard) * 100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>

          {/* ACCEPTANCE */}
          <div className="leetcode-stat">
            <div className="stat-top">
              <div>
                <span className="stat-label">
                  ACCEPTANCE
                </span>

                <span className="stat-count">
                  {acceptanceRate.toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="stat-progress">
              <span
                style={{
                  width: `${Math.min(
                    acceptanceRate,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>

          {/* RANK */}
          <div className="leetcode-stat">
            <div className="stat-top">
              <div>
                <span className="stat-label">
                  RANKING
                </span>

                <span className="stat-count">
                  {formattedRanking}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* PROFILE LINK */}
        <div className="leetcode-footer">
          <a
            href={leetcodeConfig.profileUrl}
            target="_blank"
            rel="noreferrer"
          >
            View full LeetCode profile
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default LeetCode;
