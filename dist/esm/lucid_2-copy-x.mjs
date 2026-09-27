export const name="lucid_2-copy-x";
export const id="dl_d3d438c73bba460886aa";
export const url=new URL("../icons/lucid_2-copy-x.svg?v=cb800cc9086f835033463d3fd4cdf88b1795746c6461d09c877eefcb3fe3fe9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
