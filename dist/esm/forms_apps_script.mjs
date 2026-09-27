export const name="forms_apps_script";
export const id="dl_1e75d79080f0834f8de3";
export const url=new URL("../icons/forms_apps_script.svg?v=8f9d44d4a456ac75fb488b1e22f270d691fe9d0cc9586ca7e4904cc31bef7e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
