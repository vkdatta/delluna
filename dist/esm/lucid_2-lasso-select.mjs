export const name="lucid_2-lasso-select";
export const id="dl_de8cfc5401694dbfb83c";
export const url=new URL("../icons/lucid_2-lasso-select.svg?v=f8999ee240e572dd2f73a6bce6f8c5de29fb1d9555b08d434a2310719c540a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
