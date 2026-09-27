export const name="encrypted_off";
export const id="dl_1d20b9c47444ab733267";
export const url=new URL("../icons/encrypted_off.svg?v=ad3d73f71c0569168bd66e0954804cfa5728274186d3b1d87719989bf971f43c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
