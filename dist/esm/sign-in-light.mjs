export const name="sign-in-light";
export const id="dl_a5765d8689c84048a2c1";
export const url=new URL("../icons/S/sign-in-light.svg?v=08a2bb6d5c52f6fe55efdf3439566d9c68d8c618a436981e309db23d8034d9ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
