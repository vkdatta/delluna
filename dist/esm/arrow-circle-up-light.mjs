export const name="arrow-circle-up-light";
export const id="dl_1516a03c3259451f9b56";
export const url=new URL("../icons/arrow-circle-up-light.svg?v=867e36f33d85b49e81e10fa3dc0f18f07978832b17ac240b800756f5a85f5a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
