export const name="lucid_2-graduation-cap";
export const id="dl_d0c3249a241d43c49bbf";
export const url=new URL("../icons/lucid_2-graduation-cap.svg?v=0bdcf0c3e6c2c1b61db51e8a2faa73a4cb1e31e1df8b48a272d403756f2afd0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
