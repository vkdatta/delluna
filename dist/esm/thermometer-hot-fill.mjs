export const name="thermometer-hot-fill";
export const id="dl_519eea26f0832e286c14";
export const url=new URL("../icons/thermometer-hot-fill.svg?v=b6c3589532299a42a3d9fd11a31d96439dedeb896958b7d74d9e653fe64b8481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
