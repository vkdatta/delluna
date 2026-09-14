export const name="approval";
export const id="dl_77af33e83ff040a796ff";
export const url=new URL("../icons/A/approval.svg?v=44ce82923b693d3cf910b79bb84811fc1a8e05239096f9c36be1faa389e99707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
