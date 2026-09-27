export const name="chart-polar-duotone";
export const id="dl_b7d43601093a47938627";
export const url=new URL("../icons/chart-polar-duotone.svg?v=b28c6465e9074b2fc88d370c62d5a239a9571d3cd6fc3c0848592627cc1d670c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
