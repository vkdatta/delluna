export const name="line-vertical-fill";
export const id="dl_2e4bded8a2b74c7bb54c";
export const url=new URL("../icons/line-vertical-fill.svg?v=0b3599c05a85c3be252925368d43ed160bf42bf38afe7a497ada0a514ad7b8c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
