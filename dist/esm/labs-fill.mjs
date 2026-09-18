export const name="labs-fill";
export const id="dl_12eff2f38e9b46549b5a";
export const url=new URL("../icons/L/labs-fill.svg?v=d790ecf96a8d659b2ece03beb80b7abc3e832ddbab78d5cc6250ac7b797c3c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
