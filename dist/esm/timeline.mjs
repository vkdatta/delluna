export const name="timeline";
export const id="dl_e0346f4eb5234093a02f";
export const url=new URL("../icons/timeline.svg?v=b7af95a0b98a7e0b51ac3a7f8a86a0b5e58f80e6520808883f2097503be559e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
