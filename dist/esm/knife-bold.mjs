export const name="knife-bold";
export const id="dl_3cbf4fc8e730417483fb";
export const url=new URL("../icons/knife-bold.svg?v=414f3e42c1716a5960c845fc80a069419dccdb0045ccef904cf6c39e588063a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
