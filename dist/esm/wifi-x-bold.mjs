export const name="wifi-x-bold";
export const id="dl_bb3558a40333dde803ca";
export const url=new URL("../icons/wifi-x-bold.svg?v=03750a0178e4fd4b1d57f1940e5f59dce253781f2ad0544f2e8e9ab80a5cf02a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
