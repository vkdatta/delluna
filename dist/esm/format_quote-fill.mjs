export const name="format_quote-fill";
export const id="dl_8da277f72e1d0e59d17f";
export const url=new URL("../icons/format_quote-fill.svg?v=4e49ddaacd1d4424ddb766a85a3a03a6a0c1fbbe364350e37663ea0fb188f8da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
