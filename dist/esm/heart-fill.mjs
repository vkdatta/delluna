export const name="heart-fill";
export const id="dl_1037e181091d4a13923a";
export const url=new URL("../icons/heart-fill.svg?v=d90560d4f762f1b345bd2322cd1ef696926ffa74b0c1396933b6d926faf8341e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
