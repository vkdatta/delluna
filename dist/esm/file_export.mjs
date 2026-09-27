export const name="file_export";
export const id="dl_3c1bab36f68386154618";
export const url=new URL("../icons/file_export.svg?v=efb75cc3d03a43f585acce600cc1a0b81f10ab268a5fbfb41606900be6786c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
