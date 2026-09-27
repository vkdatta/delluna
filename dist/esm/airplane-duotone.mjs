export const name="airplane-duotone";
export const id="dl_f0e2de3582e94136a776";
export const url=new URL("../icons/airplane-duotone.svg?v=1bcd57cb8e3172aab218ff0a9219059198ae8db69b533742cf1eadaefd676a02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
