export const name="theater";
export const id="dl_3ebbaaa83be5455c8f43";
export const url=new URL("../icons/theater.svg?v=0e7de7629fe451a0701f4af8c079eeb074ac21219d650df8cda80aa40d2c7128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
