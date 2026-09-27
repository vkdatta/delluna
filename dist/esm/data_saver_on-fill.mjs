export const name="data_saver_on-fill";
export const id="dl_9aa0d52ae9fdc8f5e9a7";
export const url=new URL("../icons/data_saver_on-fill.svg?v=b921434e29fab52495a9117d0237bcd6b921abca9cc01ab1bbe3dd099924badd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
