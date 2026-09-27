export const name="lucid_1-clock-10";
export const id="dl_77313ed9a01d40d8b0f9";
export const url=new URL("../icons/lucid_1-clock-10.svg?v=f740213937dc269196a9b592f7f10eefb580cf15b12955eda45b76064443274f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
