export const name="computer_arrow_up";
export const id="dl_1030a10e0b337ce9a9d8";
export const url=new URL("../icons/computer_arrow_up.svg?v=54aaa86e0eae15539667299337df7dec2dc7279ad27313a87276c2c087d42c90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
