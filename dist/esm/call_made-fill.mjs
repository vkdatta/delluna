export const name="call_made-fill";
export const id="dl_f8121cb8656c310b5cdd";
export const url=new URL("../icons/call_made-fill.svg?v=f0943c86e11d199f7a1754cc9e254fe90bef5c4aa63069da11583ee40e2929dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
