export const name="autorenew";
export const id="dl_ef896af0bbf7e2ac0476";
export const url=new URL("../icons/autorenew.svg?v=7f60f8db9e30444af717b91d0ab0dfb8e459e884ff70f96cad19d5529c3fa201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
