export const name="sailboat";
export const id="dl_82f83bf4ed9b42955b91";
export const url=new URL("../icons/sailboat.svg?v=45ffbac95406b2f7600d6d64e52bef38c9b9d62a45b583a9aaf799280fb501f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
