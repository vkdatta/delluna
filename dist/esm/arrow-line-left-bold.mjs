export const name="arrow-line-left-bold";
export const id="dl_020ce0c19c394217bf41";
export const url=new URL("../icons/arrow-line-left-bold.svg?v=33262a70eb26d1e0a1dd2c439c61f55a719eca0e7e586ce2675eb37d0396e9d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
