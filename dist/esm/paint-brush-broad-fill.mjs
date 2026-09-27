export const name="paint-brush-broad-fill";
export const id="dl_0542f182a1174f2fae0c";
export const url=new URL("../icons/paint-brush-broad-fill.svg?v=f148060951ea5b3c59974f6040e100737eaf47d272a4dd5f99b40feda04e5bb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
