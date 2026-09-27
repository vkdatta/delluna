export const name="chat_error";
export const id="dl_7ad482bbe06d8f9bff98";
export const url=new URL("../icons/chat_error.svg?v=1745a64704dbb2fde43c44c71f71cad18c37c6521e18852a0f7915f74ee057c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
