export const name="no_flash-fill";
export const id="dl_7806bfb7547697d66e77";
export const url=new URL("../icons/no_flash-fill.svg?v=20efc5f4143f4729aaafbb877d4dd2d3fc49040d7ee49958d83ff3cc26db1129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
