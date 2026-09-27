export const name="editor_choice-fill";
export const id="dl_b203a98ee222e70e4c88";
export const url=new URL("../icons/editor_choice-fill.svg?v=f1df4cf91db9435fa2bd1dabfa1e5986358c786ba42444d88a8cddfca9f2a5dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
