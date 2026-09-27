export const name="filter_list_off-fill";
export const id="dl_a3198bcc3fa44ec8154f";
export const url=new URL("../icons/filter_list_off-fill.svg?v=7065cf66ba2e8734593307b78743973dc67674fbac1876440470de89732b3664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
