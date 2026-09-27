export const name="number-five-light";
export const id="dl_de5a6ed1220a4744bf57";
export const url=new URL("../icons/number-five-light.svg?v=7f3f80f4fc52cc91ab22c7a3309702fa8a802d3edacdf1424cdd502697f2b6c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
