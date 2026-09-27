export const name="caret-circle-left";
export const id="dl_432811d062d24a23ade2";
export const url=new URL("../icons/caret-circle-left.svg?v=143b79e294a0b91244dda2a439ac40d4c92cc979697baddcb353a390035362db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
