export const name="manga-fill";
export const id="dl_b9725c3044c14798b1d8";
export const url=new URL("../icons/M/manga-fill.svg?v=3b5661c802a34d9ddf1643bb177fae753be4f6a3ea0989ffc29f654e6a2ba0ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
