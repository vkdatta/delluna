export const name="lucid_1-beer-off";
export const id="dl_28e10f9ef4f74d0791cc";
export const url=new URL("../icons/lucid_1-beer-off.svg?v=73977f8cc900045906f8d1a29a664464600a1c65b21c13c835bfc535f60a8029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
