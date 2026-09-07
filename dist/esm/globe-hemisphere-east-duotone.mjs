export const name="globe-hemisphere-east-duotone";
export const id="dl_74aa2208a8fc4d46aa98";
export const url=new URL("../icons/globe-hemisphere-east-duotone.svg?v=e37c4325d2816e8c159939ab2ed8ddb3de17113a73133385c9066933430a918e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
