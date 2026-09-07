export const name="court-basketball-fill";
export const id="dl_b47d4c5bb7bc4206a30f";
export const url=new URL("../icons/court-basketball-fill.svg?v=b507227e6ddf9d6ca19d0459e29b34e1182ab765b220f662dce8f5258bd65544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
