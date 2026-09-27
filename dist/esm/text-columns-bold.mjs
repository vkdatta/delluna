export const name="text-columns-bold";
export const id="dl_67cee72ca35ea1606f07";
export const url=new URL("../icons/text-columns-bold.svg?v=702a4bbe16c3df2d1edd74c6a6eb2b9ea37edaa2ccaeaa03ee245a0e38bdd9cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
