export const name="radar-fill";
export const id="dl_bfedb9de8399155882a9";
export const url=new URL("../icons/radar-fill.svg?v=362488548056177c9d2b569930d580ed0c5ae43c39662c2aab1c01864f6f0890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
