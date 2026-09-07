export const name="chat-dots";
export const id="dl_f84f159f922b4ff78061";
export const url=new URL("../icons/chat-dots.svg?v=d13a84b42137ad0771ea42d261ad58ad6e2cb2f3b36c88b18465a451e5e67bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
