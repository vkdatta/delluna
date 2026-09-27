export const name="cake-duotone";
export const id="dl_c2ab0027138442ed99d0";
export const url=new URL("../icons/cake-duotone.svg?v=5c447d4f2482c1a8296cf79f4a7ecf99910c486b5004e6f239f4476f93366bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
