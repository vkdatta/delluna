export const name="ad_group_off";
export const id="dl_c4a7428111619ba148ed";
export const url=new URL("../icons/ad_group_off.svg?v=224e4c304e7d1c7ae80085d32f93ac03f0eaa19182860e960849d1b0bb436f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
