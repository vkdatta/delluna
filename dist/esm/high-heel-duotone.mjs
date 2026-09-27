export const name="high-heel-duotone";
export const id="dl_c00d04f2ab0f4630893e";
export const url=new URL("../icons/high-heel-duotone.svg?v=c1d70c41541bd94e76d3993f59be47b41079a3eaf1f619090193ed6ae387dce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
