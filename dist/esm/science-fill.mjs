export const name="science-fill";
export const id="dl_ed443b35b64f19188a7b";
export const url=new URL("../icons/science-fill.svg?v=810f8d8372091fe6dcb57cf21b36b9dfb44e967e5ad875c14c733828ddbf3030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
