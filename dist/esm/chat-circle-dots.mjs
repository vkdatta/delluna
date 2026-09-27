export const name="chat-circle-dots";
export const id="dl_a1930a1e437241ceb7cf";
export const url=new URL("../icons/chat-circle-dots.svg?v=f44612d3664fcff0769d3b10f2561e3de0e6ebd86d1cbead90f193ec7c1d3ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
