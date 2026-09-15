export const name="femur-fill";
export const id="dl_f3c51d353b734181802b";
export const url=new URL("../icons/F/femur-fill.svg?v=3cefd4f633d7fa3bcd4a387d3eb26ad516a9a2afde52c4c9eb8a22bf78532069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
