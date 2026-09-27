export const name="face-mask-duotone";
export const id="dl_de8e3502fb81470e948d";
export const url=new URL("../icons/face-mask-duotone.svg?v=90a2d113bea4d3c28f800940400762c88e88e384679133202bab75f86abdcf2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
