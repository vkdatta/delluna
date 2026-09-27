export const name="rewarded_ads-fill";
export const id="dl_bb9d05b49d36e3ca963e";
export const url=new URL("../icons/rewarded_ads-fill.svg?v=8d71b7879230b1a781edca17b3a6279deb3342a838e6cab047447a2b4cee06ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
