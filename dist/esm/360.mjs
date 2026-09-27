export const name="360";
export const id="dl_c7a6fdcf98dd639ceb4e";
export const url=new URL("../icons/360.svg?v=82d3a07e80b16664219ef9f08d217259cdb5cb46fe21f6c5b69ddc08ec398c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
