export const name="flashlight_on";
export const id="dl_5f11e244a95d46c091f1";
export const url=new URL("../icons/F/flashlight_on.svg?v=a8f616de321534dbe2d044b6089792067ff662e8923d4797a6a95e4d6555adc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
