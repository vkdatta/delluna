export const name="text-italic-thin";
export const id="dl_eca090f7b1d53bbd255c";
export const url=new URL("../icons/text-italic-thin.svg?v=068be77d34ee72f75fd84dd83311d42a91d9c8efd0094e5735aa5c17da7a0930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
