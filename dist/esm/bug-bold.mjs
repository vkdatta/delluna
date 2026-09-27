export const name="bug-bold";
export const id="dl_0caa701d6ccc4188873b";
export const url=new URL("../icons/bug-bold.svg?v=a5f69e8f1282da5cf574e8494bc3c2175d673f1c95d518d93e72bfee5e7afd8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
