export const name="tumblr-logo-bold";
export const id="dl_69090bafe1926699aa49";
export const url=new URL("../icons/tumblr-logo-bold.svg?v=e1c6587a8ed2a0d34084438072b8fa3290e2e09439768e6ac48b9113a91b57cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
