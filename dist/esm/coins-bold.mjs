export const name="coins-bold";
export const id="dl_c268311cc09345b78e50";
export const url=new URL("../icons/coins-bold.svg?v=95f628047fdb23531caeb5d009278aa355c2d9835b0839a158e8d826af293f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
