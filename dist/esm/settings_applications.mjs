export const name="settings_applications";
export const id="dl_cb1385b1d5296319036e";
export const url=new URL("../icons/settings_applications.svg?v=6097f93ac1f938a81b9891bfbf89d30f1cda698333d83003cbaeef6ce485ee8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
