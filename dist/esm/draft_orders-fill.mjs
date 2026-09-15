export const name="draft_orders-fill";
export const id="dl_c7086a8ff8114b71b724";
export const url=new URL("../icons/D/draft_orders-fill.svg?v=2b369f23728c886635790fbe7e4334d9627663e3189a1d1f9906abe9b7e35da0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
