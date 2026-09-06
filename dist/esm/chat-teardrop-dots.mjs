export const name="chat-teardrop-dots";
export const id="dl_6f520e0401274052b34a";
export const url=new URL("../icons/chat-teardrop-dots.svg?v=7ca418e608edaa81efa2e897eae7d64d62382f8813ec08e57c780a9f6dccc293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
