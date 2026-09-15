export const name="fork_left";
export const id="dl_2aa24390978140f0b950";
export const url=new URL("../icons/F/fork_left.svg?v=a993b3c79e25572eefd22294dc33abf5432f4858507bbdf32e9a34507bff74e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
