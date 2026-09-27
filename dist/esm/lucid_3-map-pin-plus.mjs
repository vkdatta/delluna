export const name="lucid_3-map-pin-plus";
export const id="dl_7b61de1038c547e599b3";
export const url=new URL("../icons/lucid_3-map-pin-plus.svg?v=bab60f8914b6ca1e6d1fdbee0be63fd0774dfe2214a8d28bb29609b2f2febdb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
