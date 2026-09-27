export const name="file-xls-bold";
export const id="dl_f79d9e5190be4f049da3";
export const url=new URL("../icons/file-xls-bold.svg?v=e196f19752fca825afd506d67c6110714b4160e0f20fc9536528cc4523d97abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
