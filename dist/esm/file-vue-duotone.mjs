export const name="file-vue-duotone";
export const id="dl_dd2ca4bc63fa4306b16b";
export const url=new URL("../icons/file-vue-duotone.svg?v=fbbf9713c05de5ae722a8d42448ee2d4c5e59000c5221671ee53d660b1f3cdb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
