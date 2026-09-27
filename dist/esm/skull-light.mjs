export const name="skull-light";
export const id="dl_934671eddb7c74086410";
export const url=new URL("../icons/skull-light.svg?v=22ef1b062b06d45c4fa9046016fd227a20a214b2799465b226cbe589ed5304c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
