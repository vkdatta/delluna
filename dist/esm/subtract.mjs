export const name="subtract";
export const id="dl_a3a562899d3443ad9e9c";
export const url=new URL("../icons/S/subtract.svg?v=745816b793aa6e254c4ec9e5e2502290790698e99a1bb87d9b089451aefe19cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
