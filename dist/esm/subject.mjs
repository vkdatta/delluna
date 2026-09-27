export const name="subject";
export const id="dl_29696514f170e5f9e62b";
export const url=new URL("../icons/subject.svg?v=6b20bb72037162e01d84263cbe9fd2c005af850ee5162377a91da307c62a209b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
