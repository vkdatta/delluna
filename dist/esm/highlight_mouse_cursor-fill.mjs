export const name="highlight_mouse_cursor-fill";
export const id="dl_ab7e98b8f8caffb853bb";
export const url=new URL("../icons/highlight_mouse_cursor-fill.svg?v=374fd36a117181c47f967aef3219d03c281b50aec0867f68a79b532c1d022cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
