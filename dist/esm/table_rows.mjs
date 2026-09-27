export const name="table_rows";
export const id="dl_3e325cc88b451a6f9a5e";
export const url=new URL("../icons/table_rows.svg?v=1c19fef32f6ae3b21abc35be56752d711a22537344f1e71826eb04c4879ec5a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
