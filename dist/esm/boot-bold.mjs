export const name="boot-bold";
export const id="dl_95eb308cbd9d4c79b03f";
export const url=new URL("../icons/boot-bold.svg?v=333210cad398f3c1597280f8529a0cb98d75eb409af8d6410b4071462cd00a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
