export const name="avc-fill";
export const id="dl_2d9300d814c44ec39dae";
export const url=new URL("../icons/A/avc-fill.svg?v=08bf1cb775a33730041b241ed6181f2481cce6093e47ca43dfa042158a0a77d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
