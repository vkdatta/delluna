export const name="cannabis";
export const id="dl_916ca310bc4498f630af";
export const url=new URL("../icons/cannabis.svg?v=66a88ec5a82417b7c16a9289adda5acacba82be63c550d85fb0d629325dcc6bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
