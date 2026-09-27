export const name="stethoscope-bold";
export const id="dl_48b45423777ca750fe98";
export const url=new URL("../icons/stethoscope-bold.svg?v=d91c9425a14efb7179914ffa991be7d035535294e51105937b48168a251d002f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
