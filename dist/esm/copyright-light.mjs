export const name="copyright-light";
export const id="dl_04b317d1d4c1476593fe";
export const url=new URL("../icons/copyright-light.svg?v=d10e5f3d0331b6d683a565c0654ae4e8e0db0ca43e69861cf310b9047c73cf2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
