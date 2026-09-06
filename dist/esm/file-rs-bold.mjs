export const name="file-rs-bold";
export const id="dl_a1df0a52c1024307877c";
export const url=new URL("../icons/file-rs-bold.svg?v=d229260a5719446e63cafb0e9d1607002bde0878c6a12d5311294b8bd0f3dff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
