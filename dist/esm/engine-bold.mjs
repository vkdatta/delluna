export const name="engine-bold";
export const id="dl_de9ada43448740bfaf29";
export const url=new URL("../icons/engine-bold.svg?v=4d4d35fca39800356ca60d7ea147e36c958cefbde0dc46518203c67632d601f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
