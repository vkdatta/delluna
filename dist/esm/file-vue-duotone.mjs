export const name="file-vue-duotone";
export const id="dl_dd2ca4bc63fa4306b16b";
export const url=new URL("../icons/file-vue-duotone.svg?v=d3211acc85ef7c08aa6bc1653bb9099008e5f12ef02f4c1e3faa7b0092c58ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
