export const name="dribbble-logo";
export const id="dl_62470fcd3aad4103885d";
export const url=new URL("../icons/dribbble-logo.svg?v=76b84294e25a9b94e16ca25d2bfd3fcd9a47eee06d3c6819d2980503046e5645",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
