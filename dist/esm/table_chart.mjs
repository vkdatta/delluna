export const name="table_chart";
export const id="dl_98118ca4fa9edc409f2b";
export const url=new URL("../icons/table_chart.svg?v=c9b296a155b77cdcdda335a8c13f5139faedcd8dcdb1e02e663b8c98641b1e2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
