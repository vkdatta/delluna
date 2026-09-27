export const name="surgical";
export const id="dl_1a20791d206c0747046a";
export const url=new URL("../icons/surgical.svg?v=014bfb1052bea8961b9e7bd7ec66a8649222e37ee34a908fdd09c24d67db164d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
