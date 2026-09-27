export const name="concierge-fill";
export const id="dl_ab099344c6b6db35821e";
export const url=new URL("../icons/concierge-fill.svg?v=88d62fe6ec653c21f426225ad45e8a382e245298df4309ce6abc7a61e7491235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
