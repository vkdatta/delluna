export const name="lucid_3-square-chevron-left";
export const id="dl_dd23973757a046309be3";
export const url=new URL("../icons/lucid_3-square-chevron-left.svg?v=7a249073aa3836bf8a1a787945d809fe46b57982901cc153a5f5d836e795cf61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
