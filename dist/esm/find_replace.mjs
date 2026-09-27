export const name="find_replace";
export const id="dl_ace5ef530124ca2babca";
export const url=new URL("../icons/find_replace.svg?v=b724271a4510d8a7bb97a07cf327a31676db12d4af15052b325cbe8bdbca7c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
