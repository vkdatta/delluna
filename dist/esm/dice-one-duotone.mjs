export const name="dice-one-duotone";
export const id="dl_d3728f5044fa4d0e97e4";
export const url=new URL("../icons/dice-one-duotone.svg?v=a5544d059d6e4a167fd790130efbef1efa096a04e81036d9e8a999d0ed27c07d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
