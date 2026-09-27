export const name="file-plus";
export const id="dl_80a08da9370f4998bbe5";
export const url=new URL("../icons/file-plus.svg?v=86c8e06d8187b1f8c8187dffe78bf844771febfd485b9b307050d075edb7245e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
