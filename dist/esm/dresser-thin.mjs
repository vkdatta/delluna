export const name="dresser-thin";
export const id="dl_730accab3ec8471996cf";
export const url=new URL("../icons/dresser-thin.svg?v=510c9044c873f28c7d7dcd9145b4bd5f39bf47827d217824791634f15c856d92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
