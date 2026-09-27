export const name="coin";
export const id="dl_b8b61cc8309f447ba3a3";
export const url=new URL("../icons/coin.svg?v=281c9fa15e8446db04f441d8ec58ac48b3d6952321cac1c7e810e6f7553095d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
