export const name="lucid_3-map-pin-x-inside";
export const id="dl_c94b2d5ba43f49cfbaf2";
export const url=new URL("../icons/lucid_3-map-pin-x-inside.svg?v=1ed5af9d134a52b61b688cdfac3b86fa650884f5a7c51c8ddb40927db23b005c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
