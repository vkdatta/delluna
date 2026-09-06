export const name="cross-fill";
export const id="dl_216208947dd34821a2b2";
export const url=new URL("../icons/cross-fill.svg?v=89a649488394bd5f0f7f7eb3ae4fb43c4bbc90acc21cc02afc4df9945768b4cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
