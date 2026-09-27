export const name="lunch_dining-fill";
export const id="dl_76adb82d944d08ada782";
export const url=new URL("../icons/lunch_dining-fill.svg?v=70df3b906d1eb8058b9ad3fae82ee144c14b8cdb086ed09256ccad8e8d86fcf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
