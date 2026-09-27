export const name="file-sql-thin";
export const id="dl_b02181ea0ec64516bb06";
export const url=new URL("../icons/file-sql-thin.svg?v=a4b3b764f082a8c99df44bd36f05d7b45d515653ec1fe2ffca50bc4eba5a4b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
