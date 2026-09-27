export const name="lucid_2-line-dot-right-horizontal";
export const id="dl_e0e3ec700ef84fd79a98";
export const url=new URL("../icons/lucid_2-line-dot-right-horizontal.svg?v=a4575a0a2f89fd255e1def66d6cfb2d3d53339c35f87f553a3f75ca12a06a76b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
