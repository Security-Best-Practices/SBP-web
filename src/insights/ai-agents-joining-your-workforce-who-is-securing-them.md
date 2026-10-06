---
title: "AI Agents Are Joining Your Workforce. Who's Securing Them?"
description: "AI agents don't just answer questions. They read your email, call APIs and take actions with real credentials. Here are the new risks, what the latest OWASP and NIST guidance says, and a practical checklist for governing agents safely."
date: 2026-11-03
category: AI Security
tags: [AI security, agentic AI, prompt injection, AI governance, OWASP]
draft: true
---

A year ago, most organizations' exposure to generative AI was a chatbot that answered questions. Today, AI **agents** are booking meetings, triaging support tickets, summarizing inboxes, writing and running code, and updating records in business systems, often with the same access as the employee who set them up.

That's a meaningful productivity gain. It's also a new kind of identity in your environment, one that can be tricked by a sentence hidden in an email.

## Why agents are different from chatbots

A chatbot produces text, and a human decides what to do with it. An agent decides *and acts*. To be useful, it typically has three things:

1. **Access to private data:** your mailbox, file shares, CRM or code repositories.
2. **Exposure to untrusted content:** inbound email, web pages, uploaded documents, tickets submitted by customers.
3. **The ability to take action or communicate externally:** sending messages, calling APIs, writing files, making web requests.

Security researcher Simon Willison calls this combination the "lethal trifecta." When all three are present, an attacker who can get text in front of the agent may be able to make it leak data or take actions on their behalf. The core technique is **prompt injection**: instructions hidden inside content the agent reads, which the model can't reliably tell apart from legitimate instructions.

## This is already happening

- **Zero-click data theft from an AI assistant.** In 2025, researchers disclosed "EchoLeak" ([CVE-2025-32711](https://thehackernews.com/2025/06/zero-click-ai-vulnerability-exposes.html)), a critical flaw in Microsoft 365 Copilot. A single crafted email with hidden instructions could cause Copilot, during routine use, to pull internal data from mail, OneDrive, SharePoint and Teams and send it out. No click was required. Microsoft fixed it before any known exploitation, but it established the pattern.
- **Over-privileged agent identities.** OWASP's [Q1 2026 exploit round-up](https://genai.owasp.org/2026/04/14/owasp-genai-exploit-round-up-report-q1-2026/) describes research showing how over-privileged service accounts behind a major cloud AI platform's agents enabled credential extraction and cross-project access.
- **Bad advice, real consequences.** The same report describes an internal agent at a large tech company whose flawed guidance led an employee to make an unsafe configuration change, exposing sensitive data for about two hours.
- **Vulnerable agent platforms.** A remote code execution flaw in Flowise, a popular open-source agent builder, was actively exploited in April 2026, with an estimated 12,000 to 15,000 instances exposed online.

One finding from OWASP stands out: **seven of the eight major AI incidents** it reviewed for the quarter had no CVE at all. These weren't software bugs a patch could fix. They were design and configuration decisions about what agents could see and do.

## The frameworks are catching up

You don't have to invent an approach from scratch:

- The **[OWASP Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)** (December 2025) catalogs the main risks, led by *agent goal hijack*, *tool misuse* and *identity and privilege abuse*.
- **NIST** launched its [AI Agent Standards Initiative](https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure) in February 2026, focused on agent security, interoperability and identity. NIST's National Cybersecurity Center of Excellence (NCCoE) is working on how identity and authorization standards should apply to AI agents.
- The **NIST AI Risk Management Framework** and **ISO/IEC 42001** give you a governance structure for AI overall, and they map well onto an existing NIST CSF 2.0 or ISO 27001 program.

## A practical checklist for securing AI agents

1. **Inventory your agents.** Include sanctioned tools, AI features that vendors switched on inside SaaS apps you already use, and "shadow AI" that employees connected on their own. You can't govern what you can't see.
2. **Give every agent its own identity.** Don't let agents run on a person's credentials or a shared admin account. Use dedicated service identities you can scope, monitor and revoke.
3. **Apply least privilege, then cut it again.** An agent that summarizes email doesn't need to send email. Prefer read-only access, short-lived tokens and narrowly scoped API permissions.
4. **Require human approval for consequential actions.** Payments, deletions, permission changes, external sharing and production changes should require an explicit human confirmation.
5. **Treat everything an agent reads as untrusted.** Break the lethal trifecta where you can. An agent that processes inbound email or web content shouldn't also be able to send data to arbitrary external destinations.
6. **Control outbound connections.** Restrict which domains and services agents can reach. Many data-exfiltration techniques rely on the agent making a web request or rendering a link.
7. **Vet agent plugins and tool servers like any other software.** Model Context Protocol (MCP) servers, plugins and connectors are third-party code with access to your data. Use trusted sources, pin versions and review what they can access.
8. **Log what agents do.** Capture tool calls, data accessed and actions taken, and route those logs to your monitoring. When something goes wrong, you'll need to reconstruct what the agent did and why.
9. **Write it down.** Update your acceptable use policy, data classification rules and vendor risk questionnaires to cover AI agents explicitly, and assign an owner for AI risk.
10. **Add agents to your incident response plan.** Know how you would detect a hijacked agent, revoke its access and determine what data it touched. Then rehearse it in a tabletop exercise.

## The bottom line

AI agents are worth adopting, but they should be onboarded like a new employee with superpowers and no common sense. That means giving them a defined role, the minimum access they need, supervision for high-stakes decisions and a record of what they did. The organizations that get this right will move faster with AI because they'll be able to trust it.

Security Best Practices helps organizations build AI governance into their existing security programs, from agent inventories and access reviews to policies aligned with NIST and ISO 42001. If AI agents are showing up in your environment, [let's talk](/#contact).
