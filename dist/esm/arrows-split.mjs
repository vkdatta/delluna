export const name="arrows-split";
export const id="dl_9b769305c7bc42d49b91";
export const url=new URL("../icons/arrows-split.svg?v=561bb90e8ce99460ecf4016e3ee8dba948e9d6b57bce7289ad3f8b8a35a5b424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
