export const name="caret-circle-double-right";
export const id="dl_ad61049a6c554385ac91";
export const url=new URL("../icons/caret-circle-double-right.svg?v=8f801416efe9d1bb142558672cb9a9594e4d00c35e2a91a3f129903f4385ae30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
