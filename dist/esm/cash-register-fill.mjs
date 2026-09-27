export const name="cash-register-fill";
export const id="dl_aa248b91be2d41bcbd6b";
export const url=new URL("../icons/cash-register-fill.svg?v=2666bda51ef59d560a7c5eaca94d96e011299a01e6360af3bdc0824cfd2913dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
