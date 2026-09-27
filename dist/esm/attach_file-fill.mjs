export const name="attach_file-fill";
export const id="dl_0f2892e24340ae359728";
export const url=new URL("../icons/attach_file-fill.svg?v=9dccb9f0f979fa886a019bd2079aedbc26983c96943c8eae2bb3b4551945a64c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
