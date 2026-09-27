export const name="chat-teardrop-text-thin";
export const id="dl_559636b4f53446a68340";
export const url=new URL("../icons/chat-teardrop-text-thin.svg?v=6eb88881948dd378fe657f7ed6f05797bce7048aa2b3e628803f24c3851053b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
