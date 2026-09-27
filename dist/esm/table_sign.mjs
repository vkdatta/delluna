export const name="table_sign";
export const id="dl_067f020d03b9b11e673c";
export const url=new URL("../icons/table_sign.svg?v=a99e9d8bb98b0fa2a0d154d6fa40d4d4991155345e7cd33f36518cfac8f01609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
