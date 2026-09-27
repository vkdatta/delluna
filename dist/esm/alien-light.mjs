export const name="alien-light";
export const id="dl_bfe19ba2480447e08db3";
export const url=new URL("../icons/alien-light.svg?v=601f86acde805131e209c755e79dc03aa04d50837c5ce79d9157567919304684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
