export const name="martini-fill";
export const id="dl_4f89b83ae8724f79b7a7";
export const url=new URL("../icons/martini-fill.svg?v=2c9678aee427cc19e49a0e1d22a11a7071511bcf51f8da4a8083625db417f2f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
