export const name="box-arrow-down-duotone";
export const id="dl_09746bf59c034c88967c";
export const url=new URL("../icons/box-arrow-down-duotone.svg?v=458ab852297f34160f0dd358b425615c73b637bd17f50ffe69f24b63cd5bc82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
