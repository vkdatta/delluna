export const name="pickleball";
export const id="dl_42ede714e9a5381b1e12";
export const url=new URL("../icons/pickleball.svg?v=f42f761a913adf9a163887f7e1f23b9fae7fa3c8370c790c22f053dd9637a820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
