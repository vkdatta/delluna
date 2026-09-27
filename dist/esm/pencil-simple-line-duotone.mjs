export const name="pencil-simple-line-duotone";
export const id="dl_c9ac1f2865e34b5c9e2b";
export const url=new URL("../icons/pencil-simple-line-duotone.svg?v=b23aa2bb565d55583da232a7e9546e31110b90b6a923adeccf096d9f91736ad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
