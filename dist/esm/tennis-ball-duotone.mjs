export const name="tennis-ball-duotone";
export const id="dl_dbc2f99165df46049c61";
export const url=new URL("../icons/T/tennis-ball-duotone.svg?v=1ce02a3d8f07225966ccaf99ac3a132c3fea6a2d8d794770f0e2518a6e7d2bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
