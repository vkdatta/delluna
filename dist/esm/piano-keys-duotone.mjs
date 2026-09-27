export const name="piano-keys-duotone";
export const id="dl_ad8757a303e44d94956f";
export const url=new URL("../icons/piano-keys-duotone.svg?v=c4cbcb99c2d1dbeb0540eac5ec618f576a2bce06eec59c29f4b5a1906bffc88d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
