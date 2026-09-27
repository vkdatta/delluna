export const name="pergola";
export const id="dl_6c78debf128e76ddd181";
export const url=new URL("../icons/pergola.svg?v=2d6fdd2cfafc6ca64c40eba81e82e1a1894f39d8f7b65c23ddc466ff6ab7533b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
