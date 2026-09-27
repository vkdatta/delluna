export const name="star-plus";
export const id="dl_d21bef4e51264bd99d8f";
export const url=new URL("../icons/star-plus.svg?v=17415242140798c113b044f7d0a7381f549cfbcdba541395d318deee93389758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
