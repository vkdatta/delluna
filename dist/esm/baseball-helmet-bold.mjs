export const name="baseball-helmet-bold";
export const id="dl_4d556c7e345f472ca427";
export const url=new URL("../icons/baseball-helmet-bold.svg?v=1ce7dd86f061ee9eb715bd25613b898ae29f2b103e38adc8f33f9b8b360a72bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
