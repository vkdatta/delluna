export const name="9k";
export const id="dl_0064bccf1a49487eb511";
export const url=new URL("../icons/9k.svg?v=b82ddfd9dda036ddfb0eef5751bba561faa983636f99d9130ca0bad441a3348c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
