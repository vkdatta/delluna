export const name="tapas";
export const id="dl_8a1479e39155299cab04";
export const url=new URL("../icons/tapas.svg?v=1136be7e84d1a10bb703b944344f5293ff45692de37baf8536bb265db94a5be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
