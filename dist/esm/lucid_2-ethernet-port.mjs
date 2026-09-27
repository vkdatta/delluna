export const name="lucid_2-ethernet-port";
export const id="dl_8c0ae73f8c4d4856aef8";
export const url=new URL("../icons/lucid_2-ethernet-port.svg?v=186b5dc85e187076a1a3e822a19961cc79f653783c74a73a548eb847b46efd24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
