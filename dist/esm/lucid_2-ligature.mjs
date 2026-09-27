export const name="lucid_2-ligature";
export const id="dl_8f74f75de6a1490aaff6";
export const url=new URL("../icons/lucid_2-ligature.svg?v=db91166a1ef225090356c6b06d84eb436f880a77e028b45df5bc5bce48e9ca19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
