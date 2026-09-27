export const name="image_inset-fill";
export const id="dl_c38a3bfcf66108e44314";
export const url=new URL("../icons/image_inset-fill.svg?v=2fce185455013d9851645dc2a0602062507abbbdb649120499d1356822b8dd5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
