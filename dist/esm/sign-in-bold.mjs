export const name="sign-in-bold";
export const id="dl_99d1dc2a0bcd55f160a1";
export const url=new URL("../icons/sign-in-bold.svg?v=aa82c6bab6244d9593057426fed837f4c921da3aad9b0d9e444d48c3dd9f5826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
