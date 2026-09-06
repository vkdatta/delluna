export const name="lucid_2-lasso-select";
export const id="dl_de8cfc5401694dbfb83c";
export const url=new URL("../icons/lucid_2-lasso-select.svg?v=afa5b23f07655cad111d46d0a2ea0855fd5d32669ee95f529dd8085b89f69e22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
