import { useState } from 'react'

function App() {
  const [screen, setScreen] = useState(1)
  const [showWhy, setShowWhy] = useState(false)

  const [goal, setGoal] = useState('Buy a house')
  const [horizon, setHorizon] = useState('5 years')
  const [sip, setSip] = useState('5000')
  const [risk, setRisk] = useState('Moderate')
  const [includeInvestments, setIncludeInvestments] = useState(true)
  const [selectedFund, setSelectedFund] = useState('HDFC Flexi Cap Fund')

  const [updateState, setUpdateState] = useState('idle')
  const [draftGoal, setDraftGoal] = useState('Buy a house')
  const [draftHorizon, setDraftHorizon] = useState('5 years')
  const [draftSip, setDraftSip] = useState('5000')
  const [draftRisk, setDraftRisk] = useState('Moderate')
  const [draftIncludeInvestments, setDraftIncludeInvestments] = useState(true)

  const updateContext = () => {
    setUpdateState('updating')

    setTimeout(() => {
      setGoal(draftGoal)
      setHorizon(draftHorizon)
      setSip(draftSip)
      setRisk(draftRisk)
      setIncludeInvestments(draftIncludeInvestments)
      setUpdateState('success')
    }, 900)
  }

  const contextSummary = `${goal} · ${horizon} · ₹${Number(
    sip || 0
  ).toLocaleString('en-IN')}/month · ${risk}`

  if (screen === 2) {
    return (
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">qonfido</div>
          <div className="header-label">Expert &amp; AI-Powered</div>
        </header>

        <main className="screen">
          <section className="context-screen">
            <button className="back-button" onClick={() => setScreen(1)}>
              ← Back
            </button>

            <div className="eyebrow">Qonfidence Check</div>

            <h1>Before I recommend funds, check what I&apos;m using.</h1>

            <p className="screen-intro">
              Here&apos;s the financial context I&apos;ll use to personalise
              the options you see. You can change anything that&apos;s no
              longer accurate.
            </p>

            <div className="context-card">
              <div className="context-card-header">
                <div>
                  <div className="card-title">Your financial context</div>
                  <div className="card-subtitle">
                    Information currently being used
                  </div>
                </div>

                <div className="context-ready">✓ Ready</div>
              </div>

              <div className="context-list">
                <div className="context-row">
                  <span>Goal</span>
                  <strong>{goal}</strong>
                  <small>From your conversation</small>
                </div>

                <div className="context-row">
                  <span>Time horizon</span>
                  <strong>{horizon}</strong>
                </div>

                <div className="context-row">
                  <span>Monthly SIP</span>
                  <strong>
                    ₹{Number(sip || 0).toLocaleString('en-IN')}
                  </strong>
                </div>

                <div className="context-row">
                  <span>Risk comfort</span>
                  <strong>{risk}</strong>
                </div>

                <div className="context-row">
                  <span>Existing portfolio</span>
                  <strong>₹1,00,000</strong>
                  <small>From connected data</small>
                </div>
              </div>
            </div>

            <div className="context-confirmation">
              <div>
                <strong>✓ 5 pieces of context ready</strong>
                <span>Does this look right?</span>
              </div>

              <div className="context-actions">
                <button
                  className="secondary-button"
                  onClick={() => {
                    setUpdateState('idle')
                    setScreen(3)
                  }}
                >
                  Edit context
                </button>

                <button
                  className="primary-button"
                  onClick={() => setScreen(4)}
                >
                  Looks right <span>→</span>
                </button>
              </div>
            </div>

            <div className="context-note">
              Your context can change as your goals change. You can review it
              again before exploring funds.
            </div>
          </section>
        </main>

        <footer className="prototype-footer">
          <span>Concept experiment · Qonfidence Check</span>
          <span>AI-generated information · Not financial advice</span>
        </footer>
      </div>
    )
  }

  if (screen === 3) {
    return (
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">qonfido</div>
          <div className="header-label">Expert &amp; AI-Powered</div>
        </header>

        <main className="screen">
          <section className="edit-context-screen">
            <button className="back-button" onClick={() => setScreen(2)}>
              ← Back
            </button>

            <div className="eyebrow">Qonfidence Check</div>

            <h1>Update your context</h1>

            <p className="screen-intro">
              Keep your financial context accurate so the options you explore
              reflect what matters to you now.
            </p>

            {updateState === 'success' ? (
              <div className="success-card">
                <div className="success-icon">✓</div>

                <div className="success-title">Context updated</div>

                <p>
                  I&apos;ll use your updated goal and horizon when exploring
                  funds.
                </p>

                <button
                  className="primary-button"
                  onClick={() => {
                    setUpdateState('idle')
                    setScreen(4)
                  }}
                >
                  Continue →
                </button>
              </div>
            ) : (
              <>
                <div className="edit-card">
                  <div className="field-group">
                    <label>Goal</label>

                    <div className="option-grid">
                      {[
                        'Buy a house',
                        'Start a business',
                        'Education',
                        'Retirement',
                        'Build wealth',
                        'Other',
                      ].map((option) => (
                        <button
                          key={option}
                          className={`option-button ${
                            draftGoal === option ? 'selected' : ''
                          }`}
                          onClick={() => setDraftGoal(option)}
                        >
                          {option}

                          {draftGoal === option && (
                            <span className="option-check">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field-group">
                    <label>Time horizon</label>

                    <div className="option-grid">
                      {[
                        'Less than 3 years',
                        '3–5 years',
                        '5–10 years',
                        '10+ years',
                      ].map((option) => (
                        <button
                          key={option}
                          className={`option-button ${
                            draftHorizon === option ? 'selected' : ''
                          }`}
                          onClick={() => setDraftHorizon(option)}
                        >
                          {option}

                          {draftHorizon === option && (
                            <span className="option-check">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field-group">
                    <label htmlFor="sip">Monthly SIP</label>

                    <div className="input-wrap">
                      <span>₹</span>

                      <input
                        id="sip"
                        type="number"
                        min="0"
                        value={draftSip}
                        onChange={(event) => setDraftSip(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="field-group">
                    <label>Risk comfort</label>

                    <div className="option-grid three">
                      {['Lower', 'Moderate', 'Higher'].map((option) => (
                        <button
                          key={option}
                          className={`option-button ${
                            draftRisk === option ? 'selected' : ''
                          }`}
                          onClick={() => setDraftRisk(option)}
                        >
                          {option}

                          {draftRisk === option && (
                            <span className="option-check">✓</span>
                          )}
                        </button>
                      ))}
                    </div>

                    <p className="field-helper">
                      This describes how comfortable you are with investment
                      value moving up and down over time.
                    </p>
                  </div>

                  <div className="field-group toggle-group">
                    <div>
                      <label>Include existing investments</label>

                      <p className="field-helper">
                        Including existing investments helps identify potential
                        overlap and concentration.
                      </p>
                    </div>

                    <button
                      className={`toggle ${
                        draftIncludeInvestments ? 'on' : ''
                      }`}
                      onClick={() =>
                        setDraftIncludeInvestments(!draftIncludeInvestments)
                      }
                      aria-label="Toggle existing investments"
                      aria-pressed={draftIncludeInvestments}
                    >
                      <span />
                    </button>
                  </div>
                </div>

                {updateState === 'updating' && (
                  <div className="updating-message">
                    <span className="spinner" />
                    Updating your context…
                  </div>
                )}

                <div className="edit-actions">
                  <button
                    className="secondary-button"
                    disabled={updateState === 'updating'}
                    onClick={() => {
                      setUpdateState('idle')
                      setScreen(2)
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    className="primary-button"
                    disabled={updateState === 'updating'}
                    onClick={updateContext}
                  >
                    {updateState === 'updating'
                      ? 'Updating…'
                      : 'Update context →'}
                  </button>
                </div>
              </>
            )}
          </section>
        </main>

        <footer className="prototype-footer">
          <span>Concept experiment · Qonfidence Check</span>
          <span>AI-generated information · Not financial advice</span>
        </footer>
      </div>
    )
  }

  if (screen === 4) {
    return (
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">qonfido</div>
          <div className="header-label">Expert &amp; AI-Powered</div>
        </header>

        <main className="screen">
          <section className="funds-screen">
            <button className="back-button" onClick={() => setScreen(2)}>
              ← Back
            </button>

            <div className="eyebrow">Context confirmed ✓</div>

            <h1>Funds to explore</h1>

            <p className="screen-intro">
              Based on the context you confirmed, here are options relevant
              to explore.
            </p>

            <div className="using-context-strip">
              <div>
                <span className="strip-label">Using your context</span>

                <strong>{contextSummary}</strong>
              </div>

              <button
                className="strip-change"
                onClick={() => setScreen(3)}
              >
                Change
              </button>
            </div>

            <div className="fund-list">
              <article className="fund-card">
                <div className="fund-top">
                  <div>
                    <div className="fund-category">Flexi Cap Fund</div>
                    <h2>HDFC Flexi Cap Fund</h2>
                  </div>

                  <span className="fund-badge">Relevant to explore</span>
                </div>

                <div className="fund-section">
                  <div className="fund-section-label">Why this appeared</div>

                  <p>
                    This option is being surfaced as part of the exploration
                    set for the context you confirmed. Review its
                    characteristics and trade-offs before making any decision.
                  </p>
                </div>

                <div className="fund-information">
                  <div>
                    <span>Risk</span>
                    <strong>Verify current data</strong>
                  </div>

                  <div>
                    <span>Expense ratio</span>
                    <strong>Verify current data</strong>
                  </div>

                  <div>
                    <span>Returns</span>
                    <strong>Verify current data</strong>
                  </div>

                  <div>
                    <span>Qonfido rating</span>
                    <strong>Verify current data</strong>
                  </div>
                </div>

                <div className="tradeoff">
                  <span>Trade-off to consider</span>

                  <p>
                    Fund category, portfolio composition, volatility and
                    investment horizon should be considered together.
                  </p>
                </div>

                <button
                  className="why-button"
                  onClick={() => { setSelectedFund('HDFC Flexi Cap Fund'); setScreen(5) }}
                >
                  Why this appeared →
                </button>
              </article>

              <article className="fund-card">
                <div className="fund-top">
                  <div>
                    <div className="fund-category">Flexi Cap Fund</div>
                    <h2>Parag Parikh Flexi Cap Fund</h2>
                  </div>

                  <span className="fund-badge">Relevant to explore</span>
                </div>

                <div className="fund-section">
                  <div className="fund-section-label">Why this appeared</div>

                  <p>
                    This option is being surfaced for comparison within the
                    same broad category. Its characteristics should be
                    examined against your goals, horizon and risk comfort.
                  </p>
                </div>

                <div className="fund-information">
                  <div>
                    <span>Risk</span>
                    <strong>Verify current data</strong>
                  </div>

                  <div>
                    <span>Expense ratio</span>
                    <strong>Verify current data</strong>
                  </div>

                  <div>
                    <span>Returns</span>
                    <strong>Verify current data</strong>
                  </div>

                  <div>
                    <span>Qonfido rating</span>
                    <strong>Verify current data</strong>
                  </div>
                </div>

                <div className="tradeoff">
                  <span>Trade-off to consider</span>

                  <p>
                    Historical performance does not by itself establish future
                    outcomes. Compare risk, costs, portfolio characteristics
                    and other relevant information.
                  </p>
                </div>

                <button
                  className="why-button"
                  onClick={() => { setSelectedFund('Parag Parikh Flexi Cap Fund'); setScreen(5) }}
                >
                  Why this appeared →
                </button>
              </article>
            </div>

            <div className="funds-disclaimer">
              AI-generated information for educational purposes only. Not
              financial advice.
            </div>
          </section>
        </main>

        <footer className="prototype-footer">
          <span>Concept experiment · Qonfidence Check</span>
          <span>AI-generated information · Not financial advice</span>
        </footer>
      </div>
    )
  }

  if (screen === 5) {
    return (
      <WhyThisAppeared
        fund={selectedFund}
        context={{
          goal,
          horizon,
          sip: Number(sip || 0),
          risk,
        }}
        onBack={() => setScreen(4)}
        onChangeContext={() => setScreen(3)}
      />
    )
  }
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">qonfido</div>
        <div className="header-label">Expert &amp; AI-Powered</div>
      </header>

      <main className="screen">
        <div className="conversation">
          <div className="message user-message">
            Which mutual fund should I invest in right now?
          </div>

          <div className="message assistant-message">
            <div className="assistant-label">Qonfido</div>

            <p>
              I can help you explore mutual funds based on your goals,
              time horizon, risk comfort and other relevant context.
            </p>
          </div>

          <div className="thinking-card">
            <div className="thinking-title">
              Personalising your response…
            </div>

            <div className="thinking-step active">
              <span className="step-dot">✓</span>
              Understanding your question
            </div>

            <div className="thinking-step active">
              <span className="step-dot">✓</span>
              Using your conversation context
            </div>
          </div>

          <section className="context-intervention">
            <div className="eyebrow">Before we explore funds</div>

            <h1>
              Let&apos;s check the context I&apos;m using to personalise this
              answer.
            </h1>

            <p>
              A quick checkpoint helps you see what information is being used
              before you move from exploration to fund options.
            </p>

            <button
              className="primary-button"
              onClick={() => setScreen(2)}
            >
              Check my context <span>→</span>
            </button>

            <button
              className="text-button"
              onClick={() => setShowWhy(true)}
            >
              Why am I seeing this?
            </button>
          </section>
        </div>
      </main>

      <footer className="prototype-footer">
        <span>Concept experiment · Qonfidence Check</span>
        <span>AI-generated information · Not financial advice</span>
      </footer>

      {showWhy && (
        <div className="modal-backdrop" onClick={() => setShowWhy(false)}>
          <div
            className="why-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowWhy(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="eyebrow">Why this checkpoint?</div>

            <h2>
              The information you share can change how funds are evaluated.
            </h2>

            <p>
              Your goals, time horizon, risk comfort and other relevant
              information can affect which options are worth exploring.
            </p>

            <p>
              Qonfidence Check gives you a chance to review that context before
              continuing.
            </p>

            <button
              className="primary-button full-width"
              onClick={() => setShowWhy(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
function WhyThisAppeared({ fund, context, onBack, onChangeContext }) {

  const isHdfc = fund === 'HDFC Flexi Cap Fund'

  const fundData = isHdfc
    ? {
        category: 'Flexi Cap Fund',
        risk: 'Very High',
        ter: '1.37%',
        terDate: '31 August 2026',
        manager: 'Amit B. Ganatra',
        aum: '₹113,606.47 Cr',
        aumDate: '31 August 2026',
        strategy:
          'An open-ended dynamic equity scheme investing across large cap, mid cap and small cap stocks.',
        evidence:
          'HDFC describes the fund as investing across market capitalisations with a long-term approach and diversified portfolio.',
        tradeoff:
          'The equity-heavy structure means the fund can experience substantial fluctuations in value. Your stated horizon and risk comfort should therefore be considered alongside the fund risk profile.',
        source:
          'HDFC Mutual Fund — scheme page and August 2026 fund factsheet.',
        sourceDate: 'Information checked September 2026.'
      }
    : {
        category: 'Flexi Cap Fund',
        risk: 'See current riskometer',
        ter: 'See current TER',
        terDate: 'Current AMC disclosure',
        manager: 'Rajeev Thakkar; Raunak Onkar',
        aum: '₹147,404.51 Cr',
        aumDate: '31 August 2026',
        strategy:
          'An open-ended dynamic equity scheme investing across large cap, mid cap and small cap stocks.',
        evidence:
          'PPFAS describes the fund as an actively managed equity portfolio investing across Indian equities, foreign equities and debt securities.',
        tradeoff:
          'The scheme is equity-oriented and can therefore experience market fluctuations. Its own published material states that investors should be able to remain invested for a minimum five-year period.',
        source:
          'PPFAS Mutual Fund — scheme page and official fund disclosures.',
        sourceDate: 'Information checked September 2026.'
      }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">qonfido</div>
        <div className="header-label">Expert &amp; AI-Powered</div>
      </header>

      <main className="screen">
        <section className="why-screen">

          <button className="back-button" onClick={onBack}>
            ← Back to funds
          </button>

          <div className="eyebrow">Qonfidence Check</div>

          <h1>Why did this fund appear?</h1>

          <p className="screen-intro">
            Here is the context and fund information that are relevant to exploring this option. In this concept experiment, the user can inspect these inputs before continuing.
          </p>

          <section className="why-context-card">

            <div className="why-card-header">
              <div>
                <div className="why-card-label">YOUR CONTEXT</div>
                <h2>Context available for this concept</h2>
              </div>

              <button
                className="text-button"
                onClick={onChangeContext}
              >
                Edit context
              </button>
            </div>

            <div className="context-grid">

              <div className="context-item">
                <span>Goal</span>
                <strong>{context.goal}</strong>
              </div>

              <div className="context-item">
                <span>Time horizon</span>
                <strong>{context.horizon}</strong>
              </div>

              <div className="context-item">
                <span>Monthly SIP</span>
                <strong>
                  ₹{context.sip.toLocaleString('en-IN')}
                </strong>
              </div>

              <div className="context-item">
                <span>Risk comfort</span>
                <strong>{context.risk}</strong>
              </div>

            </div>

          </section>

          <section className="fund-evidence-hero">

            <div className="why-card-label">
              EXPLORATION SET
            </div>

            <h2>{fund}</h2>

            <span className="fund-evidence-category">
              {fundData.category}
            </span>

            <p>
              This fund is being shown as an option to explore within the
              context you confirmed. The information below explains the
              relevant characteristics to investigate.
            </p>

          </section>

          <section className="context-match-card">

            <div className="why-card-label">
              CONTEXT CONSIDERED
            </div>

            <div className="context-check-grid">

              <div>
                <span className="check-mark">✓</span>
                <strong>{context.horizon} horizon</strong>
              </div>

              <div>
                <span className="check-mark">✓</span>
                <strong>{context.risk} risk comfort</strong>
              </div>

              <div>
                <span className="check-mark">✓</span>
                <strong>₹{context.sip.toLocaleString('en-IN')} monthly SIP</strong>
              </div>

              <div>
                <span className="check-mark">✓</span>
                <strong>{context.goal}</strong>
              </div>

            </div>

            <p className="context-match-note">
              These are inputs to the exploration process, not a claim that
              the fund is suitable for you.
            </p>

          </section>

          <section className="evidence-section">

            <div className="why-card-label">
              RELEVANT EVIDENCE
            </div>

            <h2>What is worth checking</h2>

            <div className="evidence-list">

              <div className="evidence-row">
                <div className="evidence-icon">01</div>

                <div className="evidence-content">
                  <h3>Investment category</h3>

                  <p>
                    {fundData.strategy}
                  </p>
                </div>
              </div>

              <div className="evidence-row">
                <div className="evidence-icon">02</div>

                <div className="evidence-content">
                  <h3>Risk characteristics</h3>

                  <div className="evidence-value">
                    {fundData.risk}
                  </div>

                  <p>
                    Risk information should be considered alongside your
                    stated risk comfort rather than treated as a standalone
                    recommendation.
                  </p>
                </div>
              </div>

              <div className="evidence-row">
                <div className="evidence-icon">03</div>

                <div className="evidence-content">
                  <h3>Expense ratio</h3>

                  <div className="evidence-value">
                    {fundData.ter}
                  </div>

                  <p>
                    {isHdfc
                      ? `Regular-plan TER shown by HDFC Mutual Fund as of ${fundData.terDate}.`
                      : 'The applicable TER should be checked in the latest PPFAS disclosure before comparing plans.'
                    }
                  </p>
                </div>
              </div>

              <div className="evidence-row">
                <div className="evidence-icon">04</div>

                <div className="evidence-content">
                  <h3>Portfolio &amp; strategy</h3>

                  <p>
                    {fundData.evidence}
                  </p>

                  <div className="evidence-meta">
                    AUM: {fundData.aum} · {fundData.aumDate}
                  </div>
                </div>
              </div>

              <div className="evidence-row">
                <div className="evidence-icon">05</div>

                <div className="evidence-content">
                  <h3>Historical performance</h3>

                  <p>
                    Historical performance can provide comparison context,
                    but it does not establish future returns. A production
                    implementation should display the exact return period,
                    benchmark and data date.
                  </p>
                </div>
              </div>

              <div className="evidence-row">
                <div className="evidence-icon">06</div>

                <div className="evidence-content">
                  <h3>Fund manager</h3>

                  <div className="evidence-value">
                    {fundData.manager}
                  </div>

                  <p>
                    Manager information is another piece of fund-level
                    evidence that can be reviewed alongside the stated
                    investment approach.
                  </p>
                </div>
              </div>

            </div>

          </section>

          <section className="what-this-means">

            <div className="why-card-label">
              WHAT THIS MEANS
            </div>

            <h2>Context helps frame the comparison</h2>

            <p>
              Your goal, horizon, contribution amount and risk comfort help
              determine which information is relevant to investigate. They do
              not by themselves determine whether an investment is suitable.
            </p>

            <div className="tradeoff-box">

              <span>TRADE-OFF TO CONSIDER</span>

              <p>
                {fundData.tradeoff}
              </p>

            </div>

            <div className="data-note">

              <strong>Source &amp; evidence</strong>

              <p>
                {fundData.source}
              </p>

              <p>
                {fundData.sourceDate}
              </p>

            </div>

          </section>

          <div className="why-actions">

            <button
              className="secondary-button"
              onClick={onBack}
            >
              ← Back to funds
            </button>

            <button
              className="primary-button"
              onClick={onBack}
            >
              Compare with another fund
            </button>

          </div>

          <div className="funds-disclaimer">
            AI-generated information for educational purposes only. Not
            financial advice.
          </div>

        </section>
      </main>

      <footer className="prototype-footer">
        <span>Concept experiment · Qonfidence Check</span>
        <span>AI-generated information · Not financial advice</span>
      </footer>

    </div>
  )
}




