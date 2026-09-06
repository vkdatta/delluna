export const name="gavel-bold";
export const id="dl_3514d71f918d4aac8bda";
export const url=new URL("../icons/gavel-bold.svg?v=93f8265ca6a8f8b55a9e19095dc96de22de8da27f2a67762b7dbc3ead0d0f55b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
