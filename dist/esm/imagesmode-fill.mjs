export const name="imagesmode-fill";
export const id="dl_769d9445c8000f03bc88";
export const url=new URL("../icons/imagesmode-fill.svg?v=2a18115a3eae1365573e417915bf5aae2c359aa5b0332638458d017d8c2c478b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
