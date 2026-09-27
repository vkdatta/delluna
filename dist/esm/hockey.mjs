export const name="hockey";
export const id="dl_388af074191147fcada0";
export const url=new URL("../icons/hockey.svg?v=f71e7c7c4a0308ef564fe5cd18475a16d2ffae1d08aa14fa089870874519ad55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
