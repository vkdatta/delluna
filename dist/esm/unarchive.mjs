export const name="unarchive";
export const id="dl_2af9cac059bbec69709f";
export const url=new URL("../icons/unarchive.svg?v=bc096fc3bd33e9950a95c5ad99f844dc8c89bafe643633d7d602a6a07e1cc2e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
