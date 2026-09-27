export const name="sprint-fill";
export const id="dl_823be8f163f396a15a98";
export const url=new URL("../icons/sprint-fill.svg?v=776ad598693e8e2f8ad7f21d34c7bf8ca08280cb48a5ae4d47a868ee6cc7bb92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
