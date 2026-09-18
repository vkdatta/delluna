export const name="9mp";
export const id="dl_b1be8e8a32264053a40b";
export const url=new URL("../icons/9mp.svg?v=b82ddfd9dda036ddfb0eef5751bba561faa983636f99d9130ca0bad441a3348c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
