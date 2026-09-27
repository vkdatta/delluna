export const name="lucid_3-panel-bottom";
export const id="dl_7e0e7e6eb75a454d8028";
export const url=new URL("../icons/lucid_3-panel-bottom.svg?v=4545635700d59129b6cbdfe28fb13ed304c14fc1c373012da1497cb3900c5325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
