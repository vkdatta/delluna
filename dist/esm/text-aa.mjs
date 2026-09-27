export const name="text-aa";
export const id="dl_f5ec6f79f4d7fe43e9cc";
export const url=new URL("../icons/text-aa.svg?v=6b8c87ad99c571f52193c2a124c400097923f46a4e5d81bf7e1fefe750a42075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
