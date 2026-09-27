export const name="person_off";
export const id="dl_cff9787e16c138f01292";
export const url=new URL("../icons/person_off.svg?v=a4ff0defebb7a0f2e12e16fcab9d72ff46718e7e8e06f085d1795258ab36e627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
