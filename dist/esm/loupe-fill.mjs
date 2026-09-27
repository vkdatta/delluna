export const name="loupe-fill";
export const id="dl_38d961737c15fd082242";
export const url=new URL("../icons/loupe-fill.svg?v=9e1f75e4f672d840f761d012bef8dc30cb8e873521a8cb57a6ed72799208e844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
