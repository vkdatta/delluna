export const name="cloud-snow-bold";
export const id="dl_d4fa6148964e47f0896e";
export const url=new URL("../icons/cloud-snow-bold.svg?v=2b3c6f761e25451d12bb53665475ad678a4ba2ae517181d24a8aa55172d27ed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
