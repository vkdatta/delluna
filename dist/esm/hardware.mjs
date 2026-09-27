export const name="hardware";
export const id="dl_354fc6bbf5dd2a4c85ee";
export const url=new URL("../icons/hardware.svg?v=898927ff05106f0c08368172c62210dc7114cec693a7034caaea2a5bee031b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
