export const name="file-arrow-up-duotone";
export const id="dl_8d11350c09304f549237";
export const url=new URL("../icons/file-arrow-up-duotone.svg?v=5d55f4cc61d4b10ccc2d48aa63c449c7394261a565a571729c5560f31b4d9d1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
