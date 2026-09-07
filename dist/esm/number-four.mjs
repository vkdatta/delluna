export const name="number-four";
export const id="dl_8cab4af82ca4480fbff8";
export const url=new URL("../icons/number-four.svg?v=9a99a48c403db519d66f3947abdedeff8030fd0cb45234c67e25479e63f4f3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
