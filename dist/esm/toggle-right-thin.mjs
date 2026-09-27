export const name="toggle-right-thin";
export const id="dl_d5be531b49a068181d40";
export const url=new URL("../icons/toggle-right-thin.svg?v=d1848f886526780b1062de746e9649a8dd8c8c792958e568e4ce55181b0552ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
