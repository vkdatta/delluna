export const name="accessible-fill";
export const id="dl_7200ea7c169e17ce1922";
export const url=new URL("../icons/accessible-fill.svg?v=9954ab3c1d168aeda28f02dbf8811f716689f90eef79e030dd00d4c34ab60f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
