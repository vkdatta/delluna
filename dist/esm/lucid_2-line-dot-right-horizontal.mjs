export const name="lucid_2-line-dot-right-horizontal";
export const id="dl_e0e3ec700ef84fd79a98";
export const url=new URL("../icons/lucid_2-line-dot-right-horizontal.svg?v=561431a1a136c718ce0d36e306a779a75d7b5745ee147b75e932f841059bbf45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
