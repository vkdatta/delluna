export const name="file-c-sharp-bold";
export const id="dl_b6d80a1499ae4f4d8a66";
export const url=new URL("../icons/file-c-sharp-bold.svg?v=a9d37b51d8427b661099b5742cc54a44581316b09fedfa63efe5edabf4790073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
