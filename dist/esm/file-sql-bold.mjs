export const name="file-sql-bold";
export const id="dl_b03f94440cc84f12a9e0";
export const url=new URL("../icons/file-sql-bold.svg?v=5674c309d16a6f648fe7e793d0ea9d90921ece296dfe2fa4dcc247c21aba7397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
