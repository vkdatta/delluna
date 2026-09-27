export const name="pin_invoke";
export const id="dl_40c429e19d9968f7675e";
export const url=new URL("../icons/pin_invoke.svg?v=a38fcbca048e4875f8bf0f44ee650245bc9b79c6a3a55fa7cc684880f6b70252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
