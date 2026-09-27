export const name="funicular-fill";
export const id="dl_98128fde4ec307f3c66f";
export const url=new URL("../icons/funicular-fill.svg?v=26e8c2420276b0d45ebb7aed92dc9c3d388589a69ea5ecc78c86e12afae7db66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
