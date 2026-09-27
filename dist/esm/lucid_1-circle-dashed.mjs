export const name="lucid_1-circle-dashed";
export const id="dl_d1cca5234d57451aae57";
export const url=new URL("../icons/lucid_1-circle-dashed.svg?v=d526f2e4b92d3c21ef8c6b56ad68360b1fe08c57724565370371950576b085b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
