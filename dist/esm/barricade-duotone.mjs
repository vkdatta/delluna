export const name="barricade-duotone";
export const id="dl_7fac7471c9cd48f294f2";
export const url=new URL("../icons/barricade-duotone.svg?v=25d5f878fd3b89f83f3866aeae7c66d05449c2128079e5fee72f6aadabb7225e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
