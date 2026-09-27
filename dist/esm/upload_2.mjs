export const name="upload_2";
export const id="dl_e4736fe68779312c7df5";
export const url=new URL("../icons/upload_2.svg?v=85a6305140cc24c7370bb7f0de879e1c4f16cfc6270c87550813efe5da6c17cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
