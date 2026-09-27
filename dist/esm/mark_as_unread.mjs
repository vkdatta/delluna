export const name="mark_as_unread";
export const id="dl_10fd7d830631026d0c8c";
export const url=new URL("../icons/mark_as_unread.svg?v=816b4fe4ba74c7ad437ed774826cbbe93e6f3a398eb8253863436a8e1ad1bef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
