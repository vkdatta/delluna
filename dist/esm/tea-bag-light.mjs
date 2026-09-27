export const name="tea-bag-light";
export const id="dl_53926b2000c07804f948";
export const url=new URL("../icons/tea-bag-light.svg?v=dc370e62fde423ceb4cc9afa0058c1ff78c7758a23bceba88ad8a829e1ab2b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
