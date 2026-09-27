export const name="high-heel-duotone";
export const id="dl_c00d04f2ab0f4630893e";
export const url=new URL("../icons/high-heel-duotone.svg?v=ff5e698daea4fd6dbb8a9636f930ea0b768a16bebe001117a1400c3fcf767903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
