export const name="shelves";
export const id="dl_0565a3f858c4551a3156";
export const url=new URL("../icons/shelves.svg?v=382cbd08dc30bd8a47b567af2e23511a5e168620aaa39272d265fbe77f02f7ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
