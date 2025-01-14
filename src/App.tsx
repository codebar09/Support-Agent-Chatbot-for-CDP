import React, { useState } from 'react';
import { Message, CDPs } from './types';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { Bot } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your CDP Assistant. I can help you with questions about Segment, mParticle, Lytics, and Zeotap. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(content),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Segment responses
    if (lowerQuestion.includes('segment')) {
      if (lowerQuestion.includes('source')) {
        return 'To set up a new source in Segment:\n1. Go to Connections > Sources\n2. Click "Add Source"\n3. Choose your source type (e.g., JavaScript, Server, Mobile)\n4. Follow the configuration steps for your source\n5. Get your write key\n6. Implement the Segment snippet in your application\n\nFor detailed instructions, visit: ' + CDPs[0].docsUrl;
      }
      if (lowerQuestion.includes('destination') || lowerQuestion.includes('integrate')) {
        return 'To add a destination in Segment:\n1. Navigate to Connections > Destinations\n2. Click "Add Destination"\n3. Search for your desired destination\n4. Configure the destination settings\n5. Map your events and properties\n\nLearn more at: ' + CDPs[0].docsUrl;
      }
      if (lowerQuestion.includes('track') || lowerQuestion.includes('event')) {
        return 'To track events in Segment:\n1. Initialize the analytics object\n2. Use analytics.track("Event Name", properties)\n3. Add relevant properties to your event\n\nExample:\nanalytics.track("Product Viewed", {\n  product_id: "123",\n  name: "Running Shoes",\n  price: 98.50\n});\n\nSee documentation: ' + CDPs[0].docsUrl;
      }
    }

    // mParticle responses
    if (lowerQuestion.includes('mparticle')) {
      if (lowerQuestion.includes('profile') || lowerQuestion.includes('user')) {
        return 'To manage user profiles in mParticle:\n1. Initialize the SDK\n2. Set user identities:\n   mParticle.Identity.getCurrentUser().setUserIdentity("email@example.com", mParticle.IdentityType.Email)\n3. Set user attributes:\n   mParticle.Identity.getCurrentUser().setUserAttribute("premium_user", true)\n\nMore details at: ' + CDPs[1].docsUrl;
      }
      if (lowerQuestion.includes('event') || lowerQuestion.includes('track')) {
        return 'To track events in mParticle:\n1. Initialize the SDK\n2. Log events using:\n   mParticle.logEvent(\n     "Product View",\n     mParticle.EventType.Navigation,\n     {"product_id": "12345"}\n   );\n\nView full documentation: ' + CDPs[1].docsUrl;
      }
    }

    // Lytics responses
    if (lowerQuestion.includes('lytics')) {
      if (lowerQuestion.includes('audience') || lowerQuestion.includes('segment')) {
        return 'To create an audience in Lytics:\n1. Go to Audiences > Create New\n2. Define audience criteria using behavioral data\n3. Set up frequency and recency rules\n4. Add user attributes filters\n5. Save and activate your audience\n\nDetailed guide: ' + CDPs[2].docsUrl;
      }
      if (lowerQuestion.includes('campaign') || lowerQuestion.includes('personalization')) {
        return 'To set up personalization in Lytics:\n1. Navigate to Campaigns\n2. Create a new campaign\n3. Select your audience\n4. Choose campaign type (web, email, etc.)\n5. Set up content variations\n6. Configure rules and scheduling\n\nLearn more: ' + CDPs[2].docsUrl;
      }
    }

    // Zeotap responses
    if (lowerQuestion.includes('zeotap')) {
      if (lowerQuestion.includes('data') || lowerQuestion.includes('import')) {
        return 'To import data into Zeotap:\n1. Access the Data Import section\n2. Choose import method (SFTP, API, or Direct Upload)\n3. Map your data fields\n4. Set up data refresh frequency\n5. Configure identity resolution rules\n\nFull guide available at: ' + CDPs[3].docsUrl;
      }
      if (lowerQuestion.includes('audience') || lowerQuestion.includes('segment')) {
        return 'To create audiences in Zeotap:\n1. Go to Audience Builder\n2. Select data attributes\n3. Define audience rules\n4. Set update frequency\n5. Activate audience for destinations\n\nDetailed instructions: ' + CDPs[3].docsUrl;
      }
    }

    // General CDP comparison
    if (lowerQuestion.includes('compare') || lowerQuestion.includes('difference')) {
      return 'Here are the key differences between these CDPs:\n\nSegment: Best for developers, strong API-first approach, extensive integration library\nmParticle: Focused on mobile and cross-device tracking, advanced identity resolution\nLytics: Strong in machine learning and predictive analytics\nZeotap: Specializes in deterministic identity resolution and telco data\n\nFor specific feature comparisons, please ask about particular capabilities.';
    }

    // Default responses
    if (!CDPs.some(cdp => lowerQuestion.includes(cdp.name.toLowerCase()))) {
      return "I can only answer questions about CDP platforms (Segment, mParticle, Lytics, and Zeotap). Please ask a question related to these platforms.";
    }

    return "I understand you're asking about CDPs. Could you please be more specific about what you'd like to know? For example:\n- How do I set up a source in Segment?\n- How do I track events in mParticle?\n- How do I create audiences in Lytics?\n- How do I import data into Zeotap?";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg min-h-screen flex flex-col">
        <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold">CDP Support Assistant</h1>
            <p className="text-sm text-blue-100">Ask me anything about Segment, mParticle, Lytics, or Zeotap</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>

        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;