export const name="hearing_aid_left";
export const id="dl_82101059073a75722b9f";
export const url=new URL("../icons/hearing_aid_left.svg?v=9bb5fbf10ed0e1ba827242a584bc05bff29cb5b3aa58c4c098b4f97a67693bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
