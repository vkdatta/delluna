export const name="volume-2";
export const id="dl_3aa48d2527f4447e83bb";
export const url=new URL("../icons/volume-2.svg?v=15ec67e836972b6c4f26d4cb6f879976243e52206ef5622f237c8a88f9703850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
