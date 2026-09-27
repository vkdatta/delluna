export const name="lucid_3-proportions";
export const id="dl_c7d97a87897f430eb2c1";
export const url=new URL("../icons/lucid_3-proportions.svg?v=beee34efcb3ec27094f2aaf211d6bbf69a2723a019e446b7bf6c9ce537b5d429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
