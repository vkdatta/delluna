export const name="file-xls-bold";
export const id="dl_f79d9e5190be4f049da3";
export const url=new URL("../icons/file-xls-bold.svg?v=3b7fe2633ad74afde01bc82cdbf8e7042dc3d4a9f8788f9f69de4e117c23ade2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
