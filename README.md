# Bravo Module
For Google AI Hackathon
Build a creative app that uses Google’s Generative AI tools. Push the boundaries of what Gen AI apps can do with Gemini!

#Disclaimer: MVP Code Ahead 🚧

Welcome to my MVP (Minimum Viable Product) code, where speed meets creativity! This code was whipped up faster than your favorite coffee, so it’s designed to work—not win any “Best Practices”. It might not be pretty, it might not be perfect, but it gets the job done. Maintenance? We’ll cross that bridge when we get there. For now, enjoy the ride! 🚀

## Overview

Bassed of or **Umbra**: [Umbra Demo](https://github.com/Control-C/umbra) module a powerful tool designed to redact Personally Identifiable Information (PII) from textual data locally using an AI language model. This redacted text can then be securely sent to **Gemini** #madewithgemini in the cloud for various generative tasks. Once a response is returned, Umbra seamlessly reintroduces the redacted PII back into the original document, ensuring data integrity and confidentiality throughout the process.

The **Umbra demo** provides a step-by-step walkthrough of how this process works, showcasing its potential through a real-world use case scenario.

## Key Features

- **Local PII Redaction**: PII is redacted on the client-side, ensuring that sensitive information is not exposed during the generative process.
- **Cloud Integration**: Redacted text can be securely sent to Gemini in the cloud for processing and content generation.
- **Automated PII Reinsertion**: After Gemini returns the processed content, Umbra automatically reinserts the redacted PII into the document, maintaining the original context.
- **Flexible Use Cases**: Umbra can be adapted to various industries and use cases where PII needs to be protected while leveraging cloud-based AI tools.

## Use Case: Bravo Children’s Hospital

To demonstrate the capabilities of Umbra, we present a use case involving a fictitious entity, *Bravo Children’s Hospital*. In this scenario, anonymized patient data is processed through Gemini to achieve two distinct outcomes:

### 1. Insurance Letter Generation for Doctors

- **Objective**: Assist doctors in writing letters to justify necessary treatments to insurance companies.
- **Process**:
  - The patient's medical condition is described in text, with all PII redacted by Umbra.
  - The redacted text is sent to Gemini, which generates a draft letter to the insurance company.
  - Umbra then reinserts the PII back into the letter, which the doctor reviews and sends to the insurer.
- **Benefit**: Streamlines the workflow for doctors, enabling efficient communication with insurers while protecting patient privacy.

### 2. Personalized Story Creation for Child Patients

- **Objective**: Create a personalized story for child patients based on their medical condition.
- **Process**:
  - Anonymized text about the patient's condition is used by Gemini to generate a story, featuring the child's favorite toy as the main character.
  - The story is then paired with images generated by an image AI, laid out on a single page using a third-party API.
  - The final output is a PDF file, which a nurse prints and folds into a picture book following provided instructions.
- **Benefit**: Helps children understand their medical situation in a comforting and personalized way, making their hospital experience more positive.

## Demo

To see Umbra in action, please visit the following resources:

- **Demo Website**: [Umbra Demo](https://ai.qqmber.com)
- **YouTube Demonstration**: [Umbra Module Demo Video](https://www.youtube.com/watch?v=cM4MuLyvaAE)

## Getting Started

To integrate Umbra into your workflow or explore its potential applications, refer to the demo and documentation provided. For further inquiries or support, contact our development team.

---
Feel free to explore the demo, and reach out with any questions or feedback as you begin utilizing the Umbra module in your projects!
