export const name="caret-circle-left";
export const id="dl_432811d062d24a23ade2";
export const url=new URL("../icons/caret-circle-left.svg?v=5c23661196b7449e629433de3feefb22507df64b0da86abc94920a2e6cc46878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
