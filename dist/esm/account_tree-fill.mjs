export const name="account_tree-fill";
export const id="dl_cea0716daf65de386c15";
export const url=new URL("../icons/account_tree-fill.svg?v=0ec18db8f5f27e6a134f91f54d54c9aa032cdcfc30339b244ae19466736a5af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
