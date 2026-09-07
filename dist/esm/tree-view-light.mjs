export const name="tree-view-light";
export const id="dl_20e248adc9514830a7ae";
export const url=new URL("../icons/T/tree-view-light.svg?v=de27281c7778b494e810f7fcce02edd0f7340b61c7bfd40530fa02000b40db58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
