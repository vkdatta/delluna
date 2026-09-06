export const name="path-bold";
export const id="dl_37e5f20ad2fc4a24a20e";
export const url=new URL("../icons/path-bold.svg?v=b1fc30906c04ab6502a2afaa1c6b1b54a0d1679ab9dfb5b63087e8f797f46363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
