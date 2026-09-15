export const name="curtains";
export const id="dl_dcb07fbb9ce4434794e9";
export const url=new URL("../icons/C/curtains.svg?v=19a9e0b9e2de6e43eba47a3d56a97c91b0547e11f6985ad46a568c93211d35dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
