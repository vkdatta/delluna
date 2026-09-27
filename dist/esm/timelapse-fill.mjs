export const name="timelapse-fill";
export const id="dl_2eaf7a0563c1131d8242";
export const url=new URL("../icons/timelapse-fill.svg?v=ec5d652fded3d8aa6377ac9a39d0735325d0e415767bf1083d2f6e632bd6a613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
