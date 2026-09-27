export const name="e_mobiledata_badge";
export const id="dl_495259ad7f89b7dc57d9";
export const url=new URL("../icons/e_mobiledata_badge.svg?v=7dc28b0e215ef91dd20774f389daa0a65c70c989c05df707417ecea951838d7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
