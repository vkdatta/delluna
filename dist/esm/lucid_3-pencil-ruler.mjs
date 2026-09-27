export const name="lucid_3-pencil-ruler";
export const id="dl_82611782319b4b059fe3";
export const url=new URL("../icons/lucid_3-pencil-ruler.svg?v=13c5c000c505e50d411bc116336611c8c393eeeaac337d2a73fc3efccdc5a1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
