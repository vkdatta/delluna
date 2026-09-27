export const name="file-plus";
export const id="dl_80a08da9370f4998bbe5";
export const url=new URL("../icons/file-plus.svg?v=b56b3bcac0989e2bbf551f18b136587af9ab069aa7c30992ddf510743ae12843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
