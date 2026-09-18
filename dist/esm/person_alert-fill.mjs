export const name="person_alert-fill";
export const id="dl_65c4b3728a7342138597";
export const url=new URL("../icons/P/person_alert-fill.svg?v=f1f9fe4d2fcc3a69005daa6a41c53a6f13a74b5ec94c4bfc12cbf7e924425146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
