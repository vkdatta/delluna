export const name="real_estate_agent-fill";
export const id="dl_32de8805f7571f4075ab";
export const url=new URL("../icons/real_estate_agent-fill.svg?v=63d8218776d2293e1798576b247b29fb3658d3262e672de577a99874afe5de1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
