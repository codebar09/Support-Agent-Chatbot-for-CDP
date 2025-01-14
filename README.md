# CDP Support Agent Chatbot

A modern, interactive chatbot designed to provide instant support and guidance for multiple Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap.

![CDP Support Agent Screenshot](https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1600)

## Features

- 🤖 **Intelligent Responses**: Provides detailed answers to "how-to" questions for multiple CDPs
- 💬 **Real-time Chat Interface**: Clean and intuitive chat UI with message history
- 🔄 **Cross-CDP Comparisons**: Compare features and capabilities across different CDP platforms
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices
- ⚡ **Fast Performance**: Built with React and Vite for optimal performance

## Supported CDPs

- **Segment** - [Documentation](https://segment.com/docs/?ref=nav)
- **mParticle** - [Documentation](https://docs.mparticle.com/)
- **Lytics** - [Documentation](https://docs.lytics.com/)
- **Zeotap** - [Documentation](https://docs.zeotap.com/home/en-us/)

## Example Questions

The chatbot can answer questions like:
- "How do I set up a new source in Segment?"
- "How can I create a user profile in mParticle?"
- "How do I build an audience segment in Lytics?"
- "How can I integrate my data with Zeotap?"
- "What are the differences between these CDPs?"

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── ChatInput.tsx   # Message input component
│   └── ChatMessage.tsx # Individual message component
├── types.ts            # TypeScript interfaces and types
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Features in Detail

### Message Handling
- Real-time message updates
- Distinct styling for user and bot messages
- Timestamp display for each message
- Support for long-form responses

### UI/UX
- Clean, modern interface
- Responsive design
- Loading states
- Clear visual hierarchy
- Icon integration for better visual feedback

### CDP Support
- Comprehensive documentation integration
- Platform-specific responses
- Cross-platform comparisons
- Feature explanations
- Setup guides

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Live Demo

Visit the live demo at: [CDP Support Agent Chatbot](https://phenomenal-tulumba-721060.netlify.app)
