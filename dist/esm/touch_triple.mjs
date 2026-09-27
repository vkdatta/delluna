export const name="touch_triple";
export const id="dl_a40e105ef26fc4ec6278";
export const url=new URL("../icons/touch_triple.svg?v=aa10f956f3273d042a239562796bd17c203a742b9e7a353326222974367f4151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
