export const name="circle-half-bold";
export const id="dl_4475dff676e24e8eae8b";
export const url=new URL("../icons/circle-half-bold.svg?v=67664d7950fb91b21f43a487d09fdbc9a32404436544dd79872a3aa96d405d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
