export const name="face_5";
export const id="dl_4024092fa7f11d84404b";
export const url=new URL("../icons/face_5.svg?v=3f0e9275e9562737f955efe5f47296f856eaf78145429fb369af6fbbd5eb7e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
