export const name="sphere-light";
export const id="dl_ff6e841b648b4e629a4e";
export const url=new URL("../icons/S/sphere-light.svg?v=17a7397cf208f71a95a1010dfb1898711981f4a3645d1568d806dd2747165077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
