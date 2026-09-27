export const name="settings_b_roll-fill";
export const id="dl_db352f5b6995cc95d083";
export const url=new URL("../icons/settings_b_roll-fill.svg?v=26a6c40678264c511c5c7c5be0f858207039e6b8610e3f4d53e80257f519e3cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
