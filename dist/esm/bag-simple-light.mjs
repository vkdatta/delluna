export const name="bag-simple-light";
export const id="dl_1aa1f000102b4476b554";
export const url=new URL("../icons/bag-simple-light.svg?v=a4c77f37f878e7145ee50e974152802507c47722bc4f62560642f0da79940145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
