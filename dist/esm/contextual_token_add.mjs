export const name="contextual_token_add";
export const id="dl_03df0147ebcb37bfadfe";
export const url=new URL("../icons/contextual_token_add.svg?v=b62703647a2d4a510ce92f43b66cd1e2c9723387a0dad5775de76dbe7b13a15b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
