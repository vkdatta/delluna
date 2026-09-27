export const name="orange-slice-thin";
export const id="dl_ee59532f62d248bdac58";
export const url=new URL("../icons/orange-slice-thin.svg?v=c8910bdc981460bab299a0983402f403046cf8516ef0d3595f2ad5f6314dc45e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
