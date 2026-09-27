export const name="slab_serif";
export const id="dl_02d0963069f0803ca9a8";
export const url=new URL("../icons/slab_serif.svg?v=b7ff8990d4642a465b4fa3b2953045fb735862b6e1e13fdddb7a310a1cded05c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
