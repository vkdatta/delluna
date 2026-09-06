export const name="file-vue-duotone";
export const id="dl_dd2ca4bc63fa4306b16b";
export const url=new URL("../icons/file-vue-duotone.svg?v=99394f58b6bb6e6d9d5101465b9ce38edfe041c57d7860c3510e6c928882fb46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
