export const name="component_exchange";
export const id="dl_44e1a3b0c1f4591e8cea";
export const url=new URL("../icons/component_exchange.svg?v=f89181ac471392c400f9df84e8cb6763de3bb9d0f1d2e92a62b239d1e6d40190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
