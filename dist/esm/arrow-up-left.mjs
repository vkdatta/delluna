export const name="arrow-up-left";
export const id="dl_861826e371ad482280a9";
export const url=new URL("../icons/arrow-up-left.svg?v=65cedddc37b4bba848a69a44c4dc318a7abc39e29e6a362a8941471199c8f254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
