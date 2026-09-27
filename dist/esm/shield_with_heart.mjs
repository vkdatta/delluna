export const name="shield_with_heart";
export const id="dl_57a3b1b0ae129dd16d96";
export const url=new URL("../icons/shield_with_heart.svg?v=75e92808268e544aff912ebe7e3e8cb985037180c4c71aee07ec090fdc3c9f23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
