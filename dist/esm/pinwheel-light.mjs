export const name="pinwheel-light";
export const id="dl_fef04167254d4a9f83d3";
export const url=new URL("../icons/pinwheel-light.svg?v=3085ff397edaf65cab74fdeca5ff5a68faefae0735b88c2e3976c120936e53c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
