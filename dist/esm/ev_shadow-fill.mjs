export const name="ev_shadow-fill";
export const id="dl_7aa9e8dfcb11c3d24858";
export const url=new URL("../icons/ev_shadow-fill.svg?v=f2cc62bbfb5bb36d6195ed2033806447904acdfcf038eb0058d5471401d51565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
