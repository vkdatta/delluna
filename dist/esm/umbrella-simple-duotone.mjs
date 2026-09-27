export const name="umbrella-simple-duotone";
export const id="dl_a766cf098579ecd4cc94";
export const url=new URL("../icons/umbrella-simple-duotone.svg?v=827ed42b9c0f528142618738c8d952f2382c3517a71708ecc3a611483ee9abfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
