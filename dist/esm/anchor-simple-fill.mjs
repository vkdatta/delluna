export const name="anchor-simple-fill";
export const id="dl_f86297f8e19f46ffb136";
export const url=new URL("../icons/anchor-simple-fill.svg?v=59f84fe1d7d7a15ecd86b442949ae87df5fc5e0a42d04f6943e9c6068baf5d20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
