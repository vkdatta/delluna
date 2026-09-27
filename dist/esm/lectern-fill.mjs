export const name="lectern-fill";
export const id="dl_ed6c6192e5904c6abf2a";
export const url=new URL("../icons/lectern-fill.svg?v=17511b14816b3c16cfd1db3fd60a4034459db9f58dddddb5ebe294e93e72a33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
