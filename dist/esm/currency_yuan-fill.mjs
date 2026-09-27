export const name="currency_yuan-fill";
export const id="dl_4e99cb18b7f0c26cda53";
export const url=new URL("../icons/currency_yuan-fill.svg?v=feee24ee6cb5929fe111c02bc8bf4909595afc13c51f748d81594decf5c0e90a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
