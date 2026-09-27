export const name="sliders-horizontal";
export const id="dl_3f0a0132cbdce7c133a9";
export const url=new URL("../icons/sliders-horizontal.svg?v=589e963e43081ca6ab05dee90ba09a716d7293a7ba5a38c388a67fca0c9733bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
