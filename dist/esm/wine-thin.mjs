export const name="wine-thin";
export const id="dl_e4763cd4578d04e9a17b";
export const url=new URL("../icons/wine-thin.svg?v=8859a1947843c212dc67fb76e5e8736a5d62250e83699a3eab367bcc05491ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
