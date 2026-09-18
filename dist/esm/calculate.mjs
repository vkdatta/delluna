export const name="calculate";
export const id="dl_3491b1eab40a4c8f9551";
export const url=new URL("../icons/calculate.svg?v=8a1d30c493d8e8e3f8c3dffdc40bdbe259b4e2ed440fee634aa139fbddabe705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
