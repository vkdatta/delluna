export const name="numpad-bold";
export const id="dl_50bfd7a8c4be43e98afb";
export const url=new URL("../icons/numpad-bold.svg?v=776084a235c3cc43906e05efb01b932ede5aed7d8ef4ddfeb9c4adde5317811d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
