export const name="spinner-gap-light";
export const id="dl_8b787effb82229a5418f";
export const url=new URL("../icons/spinner-gap-light.svg?v=880819e2d4c426266490fac9a32f237b9e67e79ff001c689f29dfe38a0d24718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
