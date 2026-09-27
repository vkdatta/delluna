export const name="account_child_invert-fill";
export const id="dl_12fab937c70d97f15f34";
export const url=new URL("../icons/account_child_invert-fill.svg?v=408600785dc614a2ae66c34241c3792f27f01cf4cccf29671948004f419c3793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
