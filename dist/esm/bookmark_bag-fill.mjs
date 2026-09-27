export const name="bookmark_bag-fill";
export const id="dl_5dc6385e8e1b38dd7b6a";
export const url=new URL("../icons/bookmark_bag-fill.svg?v=d8f769ebae1f0d37310e44523a3995f5951b7125c3cdad0e9a6612ae376ecbd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
