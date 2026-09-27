export const name="dice-one-duotone";
export const id="dl_d3728f5044fa4d0e97e4";
export const url=new URL("../icons/dice-one-duotone.svg?v=dc178767b8bdbc72f9947726d4ee18f993d53213bebbba778360ae1a8a5e6942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
