export const name="lucid_3-map-pin-plus";
export const id="dl_7b61de1038c547e599b3";
export const url=new URL("../icons/lucid_3-map-pin-plus.svg?v=3b206e46c195625b3c4faaf1ba559979f4f346466223139c5bd8594a5a527245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
