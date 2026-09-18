export const name="soup_kitchen";
export const id="dl_3d448bb9200e45c4a0fb";
export const url=new URL("../icons/S/soup_kitchen.svg?v=e24d2a29ea0a912629fd0363af2b2da0757f80291968cae9128e88315426a12f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
