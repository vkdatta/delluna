export const name="wave-square-light";
export const id="dl_e8f83f34021eb2ed827c";
export const url=new URL("../icons/wave-square-light.svg?v=40c4c91eaa450306a7ab724b8d86b8277a829b095b05ead2c114839f3a56119a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
