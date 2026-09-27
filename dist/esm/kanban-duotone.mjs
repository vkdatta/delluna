export const name="kanban-duotone";
export const id="dl_2cddec4b16c749718f97";
export const url=new URL("../icons/kanban-duotone.svg?v=6f3dd9d414955c9ec2ed59b47eb19f61b370a15de7e0260a6c8788f14dc79c88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
