export const name="arrow-fat-right-duotone";
export const id="dl_cf6328e139b14391b81b";
export const url=new URL("../icons/arrow-fat-right-duotone.svg?v=ca360e93b888cb66749dbdf4d20da38fcf6105428a7e537f8424aa6493916ffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
