export const name="anchor-simple-fill";
export const id="dl_f86297f8e19f46ffb136";
export const url=new URL("../icons/anchor-simple-fill.svg?v=408e9713bf9ff3b942bdb7975c76a1c7daf09cd578cfa692c8537a8f0a1839c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
