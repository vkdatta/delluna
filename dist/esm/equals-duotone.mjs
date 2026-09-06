export const name="equals-duotone";
export const id="dl_fe972eb70d7745aaa735";
export const url=new URL("../icons/equals-duotone.svg?v=dbaaa226d3862736951e3d8f07eaa335bd96d845385ba0c69b5d080d6288b597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
