export const name="desk-duotone";
export const id="dl_b9ece332600746838f0c";
export const url=new URL("../icons/desk-duotone.svg?v=5efe215e861d2b409601c133275e6c6b9bbb93bbcdb5dbc8cf12974a0466abbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
