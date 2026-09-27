export const name="crown-simple-duotone";
export const id="dl_5b11b24c6eae40b98e2f";
export const url=new URL("../icons/crown-simple-duotone.svg?v=04cbd600b11020054479f69fc6efa028c08a8c93ec0c07b291bd5ea0a7a5cd94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
