export const name="code_blocks-fill";
export const id="dl_c7acad156a44b3cbfc5b";
export const url=new URL("../icons/code_blocks-fill.svg?v=73f8f8c1ef572274c3f238d2c501ca891831d434e6e2676cc7975ea4e38ee8d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
