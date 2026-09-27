export const name="battery-charging-bold";
export const id="dl_62119fb8cb4540608318";
export const url=new URL("../icons/battery-charging-bold.svg?v=d7209aa971b9c7f95fdd080d9781e4ab3272541cbde7e82c07bf9a879877913e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
