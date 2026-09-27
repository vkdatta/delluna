export const name="shadow";
export const id="dl_1510dcde59fefe7089e8";
export const url=new URL("../icons/shadow.svg?v=c210181544e732466f61aab7db4591f4763afbe5d804768ac8177866cd0a2ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
