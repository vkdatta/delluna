export const name="lucid_1-chevrons-right-left";
export const id="dl_05275c933dfc4370b152";
export const url=new URL("../icons/lucid_1-chevrons-right-left.svg?v=b3042a4c0045fbb41047313c04ecead778c68f67b1d44ab102ceed3df9c4d063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
