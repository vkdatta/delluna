export const name="file-sql-thin";
export const id="dl_b02181ea0ec64516bb06";
export const url=new URL("../icons/file-sql-thin.svg?v=9fd416e481677ab0d22fbb8e4353b970548c6d96057d3a7b7133f8cae934cd2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
