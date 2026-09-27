export const name="sock-bold";
export const id="dl_de393b69bf33f82481e3";
export const url=new URL("../icons/sock-bold.svg?v=21450d16ddcfcba5a1544ddee304d7f46dcff8f6743fea0994fa19dfee89b864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
