export const name="trend-up-light";
export const id="dl_e61c4d6ad9bfdb21241e";
export const url=new URL("../icons/trend-up-light.svg?v=0dc896104c8ceab80a5bfbc4ed9905feb358787e75e671394ec44bd52e7aef34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
