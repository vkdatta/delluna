export const name="domain_add";
export const id="dl_92e8b79bd4af0e831b53";
export const url=new URL("../icons/domain_add.svg?v=ef0e99ad06c70daceccb171ee64db205d56c6e9af82db1efb1fd673acd431112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
