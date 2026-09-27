export const name="devices";
export const id="dl_6cf085bc764f4bb08e05";
export const url=new URL("../icons/devices.svg?v=c8af8e8032e6aa779094373729f9c18616e5c5c41fe42434d891212bab5fd6cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
