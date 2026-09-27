export const name="lucid_2-list-plus";
export const id="dl_82920c97c54f4f78aeb5";
export const url=new URL("../icons/lucid_2-list-plus.svg?v=08824f52e6cf2ed6b729927dae44461610045554fab2b40f32e0c325297923b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
