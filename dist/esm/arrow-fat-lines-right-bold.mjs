export const name="arrow-fat-lines-right-bold";
export const id="dl_fec9b800d60545da962e";
export const url=new URL("../icons/arrow-fat-lines-right-bold.svg?v=c2e214a05d8f68a8ef004997061eb904fe09e57b045f370797343d914622a095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
