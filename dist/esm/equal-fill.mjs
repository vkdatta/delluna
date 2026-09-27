export const name="equal-fill";
export const id="dl_6d2c33991c829d817e09";
export const url=new URL("../icons/equal-fill.svg?v=6e985747f72547db44bc192664a56b658eb2e9de365843de50f78882d12f66a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
