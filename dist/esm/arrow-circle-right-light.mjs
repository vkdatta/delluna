export const name="arrow-circle-right-light";
export const id="dl_1baff6154ff04e749f1f";
export const url=new URL("../icons/arrow-circle-right-light.svg?v=f7357c1f1b3902e900b2dfc31b4398bc9052d8315819aaf60707d1e99096bdf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
