export const name="pinch";
export const id="dl_df74f30d39690d4f0d3d";
export const url=new URL("../icons/pinch.svg?v=68f40d9efb8af6c1796a3fb3b1f7e57014b94bf308b20bda067230ab210558eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
