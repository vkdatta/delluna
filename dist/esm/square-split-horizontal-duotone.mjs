export const name="square-split-horizontal-duotone";
export const id="dl_a2c247fb0f8da9853637";
export const url=new URL("../icons/square-split-horizontal-duotone.svg?v=9812c6b01852fe01e412603358a62584115247b523483215956e6bb22e33f13e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
