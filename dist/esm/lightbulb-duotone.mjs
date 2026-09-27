export const name="lightbulb-duotone";
export const id="dl_6fbd013d61e24632a626";
export const url=new URL("../icons/lightbulb-duotone.svg?v=8b05ab509b10981293279c4c3d9bc5a1c2751cb04f97876e35a39d5144ec57bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
