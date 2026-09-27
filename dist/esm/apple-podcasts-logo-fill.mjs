export const name="apple-podcasts-logo-fill";
export const id="dl_9bb7307b5a214db5b35e";
export const url=new URL("../icons/apple-podcasts-logo-fill.svg?v=cfa58b6e72c94397816c1771d11c8c99b1a91c4b5d0cf615bfa873646e798a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
