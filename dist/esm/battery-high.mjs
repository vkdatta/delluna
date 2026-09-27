export const name="battery-high";
export const id="dl_e9bad9aa085b457eb4ca";
export const url=new URL("../icons/battery-high.svg?v=b9d6a0499c9c77d122c8c7fbeea6c0bcc6319ffd2f8c3e35bfc5c3ff32522889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
