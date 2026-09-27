export const name="equals-duotone";
export const id="dl_fe972eb70d7745aaa735";
export const url=new URL("../icons/equals-duotone.svg?v=770244671eb4422a24ade6099f58c1c991d80c7701d92cb2d3dae8254edee7f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
