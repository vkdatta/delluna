export const name="lucid_2-ellipse";
export const id="dl_2feadfea66b941a6a9eb";
export const url=new URL("../icons/lucid_2-ellipse.svg?v=546856844aa730743387922a1c6bf0ec0f0b1e5158b6686d750222e997662266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
