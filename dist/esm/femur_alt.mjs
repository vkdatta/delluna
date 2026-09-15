export const name="femur_alt";
export const id="dl_de86c35b2594442aac87";
export const url=new URL("../icons/F/femur_alt.svg?v=7e80f3c5e11adea6f5ee5294e4326037b7121e349ebaacb56663e95477e649d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
