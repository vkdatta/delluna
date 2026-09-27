export const name="option-duotone";
export const id="dl_9ade4861df1a435ba911";
export const url=new URL("../icons/option-duotone.svg?v=ca31dd39332a34b267530c15d32d1e5280efc20a25529c797b9c16d58f5dee69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
