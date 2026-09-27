export const name="arrow-square-right-fill";
export const id="dl_1ae0a1ef1af847668155";
export const url=new URL("../icons/arrow-square-right-fill.svg?v=b57556a5c81e3ec200d4ea3f715e41375d1a5438979b67c1a3a3d4724f09d77b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
