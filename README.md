## Getting Started

### Clone this repository to your local machine:
Clone this repository to your local machine:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### Create environment file
Create a file named .env.local in the root of the project, and add the following environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```
### Run the development server
Install dependencies and start the development server:
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Make sure to set the same NEXT_PUBLIC_API_BASE_URL variable in your Vercel project settings under Environment Variables.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

