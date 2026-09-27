export const name="list-star-bold";
export const id="dl_2ea7853c2a0a4069ac9c";
export const url=new URL("../icons/list-star-bold.svg?v=c753797bbde9977365bef314c743334c7e54721a714ad6fc6e25f1a18267023d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
