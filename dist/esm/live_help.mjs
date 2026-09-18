export const name="live_help";
export const id="dl_07c260f390834b16b51b";
export const url=new URL("../icons/L/live_help.svg?v=8306b1b1cc395c8b8cc6a2fe8e7cbec61fba49447e142cd55d03ded48a6f2096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
