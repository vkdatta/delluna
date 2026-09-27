export const name="credit_card";
export const id="dl_cb083766d7135ce4653e";
export const url=new URL("../icons/credit_card.svg?v=0fafff242897e1859c5260ad9c0d6b187a0e1c908f6fb9b4baf1124b54070391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
