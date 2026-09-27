export const name="no_transfer";
export const id="dl_90b809c5ee3ba27e7f99";
export const url=new URL("../icons/no_transfer.svg?v=4013409448eb4f3f5b1e948b4785dc77c597128efd8b2b374218cad3adcea882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
