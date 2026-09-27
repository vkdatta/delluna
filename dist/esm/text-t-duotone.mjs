export const name="text-t-duotone";
export const id="dl_25e8de9a9e6408c1781a";
export const url=new URL("../icons/text-t-duotone.svg?v=a8f073931756b6a5f39032d89bdea9dfdd90635bb1b896e02f29cd26a4ead751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
