export const name="link-simple-horizontal-light";
export const id="dl_6de52108828e4583b779";
export const url=new URL("../icons/link-simple-horizontal-light.svg?v=c79d97e7b414b382893115dbf9e5649436b971c64a7b78e3b2b3d93cad08eb07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
