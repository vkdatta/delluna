export const name="rows-plus-bottom-duotone";
export const id="dl_ddce48accd604921b2af";
export const url=new URL("../icons/rows-plus-bottom-duotone.svg?v=4bd566733b3f4a8c7d9971b44f78e3e5f21321b2e89ea34cbbee862a910569da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
