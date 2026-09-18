\# Qonfidence Check



A product concept experiment inspired by testing Qonfido's AI-powered mutual fund discovery experience.



\## Overview



Qonfidence Check explores a simple product question:



> As users move from conversational exploration toward actionable fund comparisons, how might the financial context and evidence influencing that exploration become more visible and controllable?



The prototype introduces a lightweight checkpoint between conversation and fund exploration. Users can inspect the context being used, correct it when necessary, confirm it, and then inspect the relevant evidence associated with an option.



\*\*This is an independent concept experiment inspired by testing Qonfido. It is not a Qonfido product or production feature.\*\*



\---



\## What I Observed



During testing, I found that the AI experience could carry financial context across a conversation and adapt its analysis when the user's circumstances or goals changed.



That led to a product question:



> How might a financial AI make the relevant context behind an actionable exploration step easier for the user to inspect and control?



Rather than proposing a feature only on paper, I built a working interaction experiment around that question.



\---



\## The Experiment — Qonfidence Check



The concept adds a user-controlled checkpoint before fund exploration.



\### The flow



\*\*1. Ask Qonfido\*\*



The user begins with a natural-language financial question.



\*\*2. Check context\*\*



The experience surfaces the financial context available for the current exploration.



\*\*3. Edit context\*\*



The user can correct information that is no longer accurate.



\*\*4. Confirm\*\*



The user explicitly confirms the context before continuing.



\*\*5. Explore funds\*\*



The prototype presents an exploration set based on the confirmed context.



\*\*6. Inspect evidence\*\*



The user can open an option and review the context and fund-level information relevant to exploring it.



\---



\## Product Principles



\### User-controlled context



Users should be able to see and correct the information being used to personalise an experience.



\### Evidence visibility



Relevant fund characteristics and source information should be inspectable alongside the exploration experience.



\### No chain-of-thought exposure



The concept focuses on user-facing context and evidence rather than exposing private model reasoning.



\### Exploration ≠ suitability



The prototype deliberately distinguishes between surfacing information for exploration and making a personalised investment recommendation.



\### Clear financial-information boundaries



The experience uses explicit educational and informational disclaimers rather than presenting the concept as financial advice.



\---



\## What I Built



\- Interactive React prototype

\- Multi-screen product flow

\- Conversation-to-context transition

\- Editable financial context

\- Draft vs. confirmed context state

\- Context confirmation checkpoint

\- Fund exploration interface

\- Fund-specific evidence views

\- Context-aware navigation

\- Responsive UI

\- Financial-information disclaimers



\---



\## Prototype Screens



\### 01 — Ask Qonfido



Introduces the context checkpoint before moving from conversation toward fund exploration.



\### 02 — Qonfidence Check



Makes the available financial context visible before the user continues.



\### 03 — Edit Context



Allows the user to modify goals, horizon, contribution amount, risk comfort and portfolio context.



\### 04 — Funds to Explore



Shows the exploration set using the context confirmed by the user.



\### 05 — Why This Appeared



Lets the user inspect relevant context and fund-level evidence associated with an option.



\---



\## Tech Stack



\- React

\- JavaScript

\- Vite

\- CSS



\---



\## Run Locally



```bash

npm install

npm run dev

