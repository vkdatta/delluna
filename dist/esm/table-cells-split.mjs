export const name="table-cells-split";
export const id="dl_1dbd3f89ae8a466e808c";
export const url=new URL("../icons/table-cells-split.svg?v=24d5785b5e101db8c10999ebae651da6d4453e6704f6865010a55f3736a9659f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
