export const name="file-xls-light";
export const id="dl_a25283cf4c994076b525";
export const url=new URL("../icons/file-xls-light.svg?v=1f245207084c4fdda9455449aa08a5a182f951c72a4f8bd7144e4071417b6135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
