export const name="dot-thin";
export const id="dl_e8330ac3c0ae465db274";
export const url=new URL("../icons/dot-thin.svg?v=26333b0b6a229b353efc1704023e77dad7c3d29fa5ffa2577bce0c91d27e3691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
