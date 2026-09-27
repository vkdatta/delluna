export const name="user-check-light";
export const id="dl_8cc7c20a62c90df75c71";
export const url=new URL("../icons/user-check-light.svg?v=8693e70555e0bc741089e699ac3cd2f0181240a5a3918b7fad2739db09d708cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
