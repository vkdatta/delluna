export const name="handbag-simple-light";
export const id="dl_1d850e04067c454bba78";
export const url=new URL("../icons/handbag-simple-light.svg?v=99cb1da236ddb58cc398e1efe257f5387d8f71ebf94bffad849bb83febf89443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
