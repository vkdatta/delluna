export const name="arrow-circle-down-right-fill";
export const id="dl_9911aa438d444fb2bcbe";
export const url=new URL("../icons/arrow-circle-down-right-fill.svg?v=20db59c88eaccdfb19339a49a9f8fda31933d5d18be1bcef4aa3e918e4f7303b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
