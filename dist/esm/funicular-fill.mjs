export const name="funicular-fill";
export const id="dl_56f72facb7ba46798121";
export const url=new URL("../icons/funicular-fill.svg?v=63aad53c926c32de9e361ada0a644ddda934fab8fc74fce8f7fcbae8ecdf38e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
