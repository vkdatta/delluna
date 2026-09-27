export const name="lucid_3-rewind";
export const id="dl_64836b39f2124ed2b9a8";
export const url=new URL("../icons/lucid_3-rewind.svg?v=cf1784456af6403b830b63bec106527dcdaf09cfc6d58abd2bf8161be17eae7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
