export const name="pipe-wrench-bold";
export const id="dl_57d19e15885f41a09dc8";
export const url=new URL("../icons/pipe-wrench-bold.svg?v=9ba12e482b53aa17ea3f60374c06535f8e3377f93be3a7bf2862efccae02c902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
