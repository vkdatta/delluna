export const name="monitor_heart";
export const id="dl_2f84fd3b9152dd3f5195";
export const url=new URL("../icons/monitor_heart.svg?v=e211d327ac61dc97a96e8bc1a44643f36125b740c8bb6b79068a23013b0c4fd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
