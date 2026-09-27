export const name="caret-circle-double-left-duotone";
export const id="dl_f1e49587325c405c9ebb";
export const url=new URL("../icons/caret-circle-double-left-duotone.svg?v=deee06074ea7a2aea56bf04dfa9da8ebde55b9ff6a09b0478699c8c6cbf25939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
