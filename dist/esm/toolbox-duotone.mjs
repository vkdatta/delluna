export const name="toolbox-duotone";
export const id="dl_afb3607312bad7cd6eec";
export const url=new URL("../icons/toolbox-duotone.svg?v=d31c748defb9a44d49ceaa9aac7fc7860a0295b4c7efe36d364d4026198c1d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
