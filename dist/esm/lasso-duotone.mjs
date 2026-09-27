export const name="lasso-duotone";
export const id="dl_f63930e9e4104825a741";
export const url=new URL("../icons/lasso-duotone.svg?v=a4e68669fa6bc0d0eb1bf9782175054aae7741708b438d7f334cfe40e7fb0428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
