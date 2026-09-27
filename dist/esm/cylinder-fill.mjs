export const name="cylinder-fill";
export const id="dl_1c4f630cf15d44a0ad55";
export const url=new URL("../icons/cylinder-fill.svg?v=a5870b0cbf7816cbc826c65436ba2e1ecc6ca09533d874b8c00c650c85341829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
