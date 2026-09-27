export const name="fluid-fill";
export const id="dl_c61e3ef775a247e43c6d";
export const url=new URL("../icons/fluid-fill.svg?v=59b9b55fd7e6a83504329ff839dffc4b54d109c3da0cbfdc9108be561d31273e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
