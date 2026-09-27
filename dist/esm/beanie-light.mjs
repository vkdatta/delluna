export const name="beanie-light";
export const id="dl_058bf0a8684a4ff39da1";
export const url=new URL("../icons/beanie-light.svg?v=d6020f6061586becddba8f6ff88ac04bc216666bc5ac2331947b6d09a04be180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
