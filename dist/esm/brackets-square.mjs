export const name="brackets-square";
export const id="dl_28567992456742a3bccc";
export const url=new URL("../icons/brackets-square.svg?v=e7f531987a9d1a16354fac977cae8fff640bb181215ff604e1fba06ad6060fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
