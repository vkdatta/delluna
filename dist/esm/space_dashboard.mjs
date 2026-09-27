export const name="space_dashboard";
export const id="dl_141a597a17032eac3b5e";
export const url=new URL("../icons/space_dashboard.svg?v=6cba6c64200a0eb3b766249e63949944d2995bbf36addcee3d3380176dd3d847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
