export const name="microsoft-excel-logo-thin";
export const id="dl_03a9bb32078c42f09443";
export const url=new URL("../icons/microsoft-excel-logo-thin.svg?v=e1456e8fb2c5ab2f9663a6488a61ef1e154aa219613976da65e6eb1d9b4a90b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
