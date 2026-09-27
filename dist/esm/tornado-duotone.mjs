export const name="tornado-duotone";
export const id="dl_088860c52624abd84b4f";
export const url=new URL("../icons/tornado-duotone.svg?v=c4f39c960ba262d3c31b921cbde46711bd8df7b97a26ea32b5d655424bfb3582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
