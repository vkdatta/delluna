export const name="amend";
export const id="dl_5e77227e1adae244cfde";
export const url=new URL("../icons/amend.svg?v=a6c647a9fc2875c2fe149f94f3bd39646ba5df5f311ae390b40896aa3976b866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
