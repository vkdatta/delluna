export const name="ambulance-fill";
export const id="dl_5d2732a254f74afdaf05";
export const url=new URL("../icons/ambulance-fill.svg?v=ce64dc546771ddbc60c94a9ee04299c16f5a0af3a5914f364558e645e414ba3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
