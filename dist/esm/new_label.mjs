export const name="new_label";
export const id="dl_0143ae66e61fc60ed48b";
export const url=new URL("../icons/new_label.svg?v=920465386d68f0d9211b5970bce054fd0186a726443786ec6425899052de0b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
