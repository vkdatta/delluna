export const name="ar_on_you-fill";
export const id="dl_d69f14b48d1cc49e706a";
export const url=new URL("../icons/ar_on_you-fill.svg?v=727dee81a6c38db0ac659c96dc6037d87754f576d092760c823277ae9d6e166b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
