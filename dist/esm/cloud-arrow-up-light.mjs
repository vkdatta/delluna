export const name="cloud-arrow-up-light";
export const id="dl_49d11861b51a4317b58e";
export const url=new URL("../icons/cloud-arrow-up-light.svg?v=fefcf9164b63bf3e4efb97cf65fa5ba88d88465d74aa2a7e39e9b5d5d0bde9d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
