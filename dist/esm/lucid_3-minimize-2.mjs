export const name="lucid_3-minimize-2";
export const id="dl_b6c863f0cc9547dc8971";
export const url=new URL("../icons/lucid_3-minimize-2.svg?v=25995b820c487ec0b585aaa4d81d8d986a18d78cc9029ceaa34171d8f90ccda0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
