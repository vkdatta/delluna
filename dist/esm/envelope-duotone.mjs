export const name="envelope-duotone";
export const id="dl_46ed8b88afac4d0c9e2e";
export const url=new URL("../icons/envelope-duotone.svg?v=674acda64ffb55841e5983928039966f40fc25727e6497ccf20cd6611d452f66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
