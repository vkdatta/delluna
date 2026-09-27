export const name="background_dot_small-fill";
export const id="dl_b0a7a035963052fea270";
export const url=new URL("../icons/background_dot_small-fill.svg?v=480440caa1335ab9a2ddebfc8877f67db161d457f50761c261021b49106c4d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
