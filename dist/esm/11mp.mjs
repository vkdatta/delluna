export const name="11mp";
export const id="dl_c4e776c2a042d51a856e";
export const url=new URL("../icons/11mp.svg?v=5184ea569cbb39a94911f9740626fb4bda27bf8fa249ce8979208a9b14253dee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
