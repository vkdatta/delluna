export const name="cell-signal-none-bold";
export const id="dl_f4a66c2722b944fda205";
export const url=new URL("../icons/cell-signal-none-bold.svg?v=cde544502fc6336c7ca132dec0eb44fd310c3dda46f45d8d2bffef6f80a4cb4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
