export const name="folder_code-fill";
export const id="dl_72e8e84e710e084508d4";
export const url=new URL("../icons/folder_code-fill.svg?v=06b095af71b12e7d5956c003e400a2bbb07b8d5f01343aae163a50f8b479042c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
