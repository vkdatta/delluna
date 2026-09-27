export const name="dots-three-outline-vertical";
export const id="dl_3afeee16072d4ded9f4e";
export const url=new URL("../icons/dots-three-outline-vertical.svg?v=43a444eafd6d8e7c64a3d2f8f641ff064a40c698723a66c1b33ed0f45e2a788c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
