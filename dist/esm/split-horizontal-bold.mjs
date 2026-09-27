export const name="split-horizontal-bold";
export const id="dl_c43ec135e9b6fbdbffae";
export const url=new URL("../icons/split-horizontal-bold.svg?v=be5f986adfa32fb88e39b38001a9e46405018a695d854d3c40682451e98f070e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
