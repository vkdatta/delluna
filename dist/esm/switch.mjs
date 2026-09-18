export const name="switch";
export const id="dl_7776f7297c81457ebdd6";
export const url=new URL("../icons/S/switch.svg?v=9aaf0803560812777c2717775d46db77386200b27908e7d4d67d1883bd46832f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
