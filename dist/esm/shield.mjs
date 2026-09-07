export const name="shield";
export const id="dl_c59afd87291245ee9de9";
export const url=new URL("../icons/S/shield.svg?v=ac5af74bb9729d9ba0e3a8796e300e016e2f07997f2d4b67071defce18503f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
