export const name="credit_card-fill";
export const id="dl_7c6929cec6362c94be7f";
export const url=new URL("../icons/credit_card-fill.svg?v=cab2570b426b14679fdbcfd8a8908989a0ced01fd7c2c3c71a8fad8dce266914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
