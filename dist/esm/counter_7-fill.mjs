export const name="counter_7-fill";
export const id="dl_088ba58f3d89d5da8f31";
export const url=new URL("../icons/counter_7-fill.svg?v=fc0906edc8ece35b8a778965a984e5a8d1e5135cfa1f76267c725b47afd32b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
