export const name="recent_actors-fill";
export const id="dl_251fa2a37bdfb07c1e4a";
export const url=new URL("../icons/recent_actors-fill.svg?v=5f53a83e4e47e1d3e62c5c653fa202df86f60bed958a96889a158a58790a0eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
