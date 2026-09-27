export const name="houseboat";
export const id="dl_e2124997754cdf439e08";
export const url=new URL("../icons/houseboat.svg?v=c4dbf441f9e3a54c239be831027f644476624979cbcf6cdfe369fe5c738cbfb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
