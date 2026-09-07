export const name="siren-bold";
export const id="dl_6c7cfe31318a44eabf6d";
export const url=new URL("../icons/S/siren-bold.svg?v=97ac840ed2d0b96c93bfcdf1ad802cf7bb46a8b9863fbc7eb0524646ed79cffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
