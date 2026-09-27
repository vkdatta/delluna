export const name="printer-thin";
export const id="dl_b1959d30d5ac45bb9548";
export const url=new URL("../icons/printer-thin.svg?v=4bc94910ad285eb367eb7535c0f4d8a9f92d93944b69dbf2d94d06e87d4bfacf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
