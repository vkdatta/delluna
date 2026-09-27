export const name="mobile_share-fill";
export const id="dl_c28c787f85dc85405d2d";
export const url=new URL("../icons/mobile_share-fill.svg?v=a48797e76d547d720bafedce807d332e46c52e18c72ecbfa3bde6b58924c5ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
