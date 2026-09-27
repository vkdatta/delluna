export const name="stack-minus-light";
export const id="dl_8580e27e53a270b9e757";
export const url=new URL("../icons/stack-minus-light.svg?v=f7b473a84e5b9e0a531c0e2cdc2972277760b064ab99dc8ae52422c42873ca0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
