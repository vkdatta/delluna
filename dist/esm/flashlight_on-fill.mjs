export const name="flashlight_on-fill";
export const id="dl_23b0d6bc67fc453fbbe9";
export const url=new URL("../icons/F/flashlight_on-fill.svg?v=3a105a3a8b08b70005d24ea9e08207fa7dfbe36bf04cd38892b133805ba489d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
