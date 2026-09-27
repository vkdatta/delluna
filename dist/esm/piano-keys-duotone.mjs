export const name="piano-keys-duotone";
export const id="dl_ad8757a303e44d94956f";
export const url=new URL("../icons/piano-keys-duotone.svg?v=2a7e15f577f7e689445c89a52292357b7666e03c99856ee4c455252f853308b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
