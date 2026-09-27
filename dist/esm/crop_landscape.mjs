export const name="crop_landscape";
export const id="dl_e53b8d1c4c49afa281ed";
export const url=new URL("../icons/crop_landscape.svg?v=fd56eecbbb498d958228f289313ecbcdcc511f4a54e7eefbec02cb826dd2dc0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
