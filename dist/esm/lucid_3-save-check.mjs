export const name="lucid_3-save-check";
export const id="dl_de00a7005192403f8628";
export const url=new URL("../icons/lucid_3-save-check.svg?v=5b401004e37298cd675bbb5986b4df75b149eedec1c3d518396eda30aeb9aba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
