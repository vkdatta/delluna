export const name="file-vue-light";
export const id="dl_badbffbada724623a5db";
export const url=new URL("../icons/file-vue-light.svg?v=b65a323e3fcb6c001041fe360b90d824cdd50c77979591f59e384263cac4dd03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
