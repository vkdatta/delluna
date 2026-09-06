export const name="dresser-duotone";
export const id="dl_8829e158154546baadcf";
export const url=new URL("../icons/dresser-duotone.svg?v=e14a9273e53d226ec2041a298476764aee20531934f60c47feb8186c0be70399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
