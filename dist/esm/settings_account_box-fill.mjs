export const name="settings_account_box-fill";
export const id="dl_ee061fb1352e33c11e11";
export const url=new URL("../icons/settings_account_box-fill.svg?v=edff0cfe076ee3230789478306cd27466beaec3607539e7ac226e81791a46d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
