export const name="moped";
export const id="dl_beb57482589e40f69970";
export const url=new URL("../icons/moped.svg?v=b189550c1324933919b8f4bbce74bd41026ebefb2dc3d28f76c5e73b30f1c462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
