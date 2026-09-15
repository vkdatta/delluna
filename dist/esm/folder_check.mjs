export const name="folder_check";
export const id="dl_43b5301250d143af82cd";
export const url=new URL("../icons/F/folder_check.svg?v=53e6f7757e227463cbbd0b1dff7699534c7e77e19c347d614bbda547585e639d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
