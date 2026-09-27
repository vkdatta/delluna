export const name="arrows-in-bold";
export const id="dl_d91da91931194e71a89a";
export const url=new URL("../icons/arrows-in-bold.svg?v=31447a4e363e16dd88fb03c77cbdb1de489e7751e3fceffdd3b7446349575b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
