export const name="lucid_1-bold";
export const id="dl_7d53a4bd28d944b7b715";
export const url=new URL("../icons/lucid_1-bold.svg?v=53198a91071676fe10a9f260c27ff06e9ac5ed8731e59c72d63ee8d871259389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
