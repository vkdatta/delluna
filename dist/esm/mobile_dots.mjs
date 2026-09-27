export const name="mobile_dots";
export const id="dl_9cae6be68e9cc70bf5a3";
export const url=new URL("../icons/mobile_dots.svg?v=b5f829e2170112f2f94096cb841c5a45c785fc5043b419d9053095345764cf7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
