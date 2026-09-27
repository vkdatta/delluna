export const name="hockey";
export const id="dl_388af074191147fcada0";
export const url=new URL("../icons/hockey.svg?v=3fe5570272216df984c8b5f57f45584f9868c02b680fe6e46e72bc6c5308fde4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
