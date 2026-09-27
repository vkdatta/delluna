export const name="file-image-light";
export const id="dl_6855bf60552c4620a317";
export const url=new URL("../icons/file-image-light.svg?v=696238069d8bd068cb4f9a3b35abaccb30410825275ff7d17cde2f9a94e12a92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
