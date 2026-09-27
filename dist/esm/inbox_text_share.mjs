export const name="inbox_text_share";
export const id="dl_06a9bb80ab155149bdc0";
export const url=new URL("../icons/inbox_text_share.svg?v=9d9459a9a452d1c26d6f676c8a868bc946178da85a6a354a19168db5154ee553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
