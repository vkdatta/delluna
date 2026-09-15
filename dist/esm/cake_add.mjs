export const name="cake_add";
export const id="dl_cf779e9a04d144308e90";
export const url=new URL("../icons/C/cake_add.svg?v=d71c6220e0b77999c2cb82e7939c0416de498401de4392d0ae969b5ef02dcbca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
