export const name="lucid_2-mails";
export const id="dl_108ae11a80504667ab4f";
export const url=new URL("../icons/lucid_2-mails.svg?v=ee1b9185d3a91d438e6a8b6a5f530b46cb35c4485a6a75ce99cf487cbccf8548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
