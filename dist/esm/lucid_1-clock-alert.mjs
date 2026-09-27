export const name="lucid_1-clock-alert";
export const id="dl_fdd2d21248fe4457a855";
export const url=new URL("../icons/lucid_1-clock-alert.svg?v=e9b7c985498175cee5586ec126c41ccdb114ba3940aa0ad768dfe8ca775b376f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
