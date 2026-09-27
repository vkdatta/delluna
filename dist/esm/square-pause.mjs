export const name="square-pause";
export const id="dl_5a8bc502856c4bbfb02c";
export const url=new URL("../icons/square-pause.svg?v=11135d1554a394f64d6580fed7b1b9739329bd1d855e0dd190d1387e74fd73cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
