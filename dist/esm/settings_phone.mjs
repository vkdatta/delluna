export const name="settings_phone";
export const id="dl_9629f7df01ccee28e556";
export const url=new URL("../icons/settings_phone.svg?v=fac1fdd42d5d1904425ed4a0efbf49aba84626156b2898bb1c39931806c30871",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
