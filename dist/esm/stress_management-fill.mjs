export const name="stress_management-fill";
export const id="dl_e2787b27feb60f1ab66e";
export const url=new URL("../icons/stress_management-fill.svg?v=9789e98f008addebdf95b3f3ff8d85f56b5a91da0e83f628750611a253cdc5ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
