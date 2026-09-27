export const name="microsoft-excel-logo-thin";
export const id="dl_03a9bb32078c42f09443";
export const url=new URL("../icons/microsoft-excel-logo-thin.svg?v=6843803f64046d883c6156f5f08ff71ef39450df228b3823a5bbb6d7d54a99a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
