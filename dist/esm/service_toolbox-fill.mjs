export const name="service_toolbox-fill";
export const id="dl_8d2f619193c25be4ef3f";
export const url=new URL("../icons/service_toolbox-fill.svg?v=ca96eadc63eede945a6d1189e135eb1e22dac71571809e1d3ef5ef240c981ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
