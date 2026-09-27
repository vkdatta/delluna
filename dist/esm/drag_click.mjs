export const name="drag_click";
export const id="dl_b7b04edfcdf63fb85012";
export const url=new URL("../icons/drag_click.svg?v=82721f1f12f7e98133a12f31a07ee11df8979d2f58f2256783f0dd3a187ceeef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
