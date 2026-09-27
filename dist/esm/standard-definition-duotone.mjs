export const name="standard-definition-duotone";
export const id="dl_274bda20813ea4a27c13";
export const url=new URL("../icons/standard-definition-duotone.svg?v=e01e43fa8a197710dd344fe04fb5cb6cbda46fa9ffd9b1674a3c25aa40289093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
