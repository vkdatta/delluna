export const name="arrow-line-down";
export const id="dl_d0cc6277107f4ae3bfba";
export const url=new URL("../icons/arrow-line-down.svg?v=1b756c0e15b56ebd8d2f61fda60bb118cde9efa39d78ad0c07fdd1b5c97b1e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
