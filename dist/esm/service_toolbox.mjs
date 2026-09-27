export const name="service_toolbox";
export const id="dl_4daf211ada23a5cdf555";
export const url=new URL("../icons/service_toolbox.svg?v=608ba63ef47a8c23706e22e99338421b433ffd0fe31370344db19e107061f775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
