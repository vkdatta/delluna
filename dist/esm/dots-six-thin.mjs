export const name="dots-six-thin";
export const id="dl_212306670c234972aed6";
export const url=new URL("../icons/dots-six-thin.svg?v=15a1e1bfaedff50807b01833143f51e07298c6e7d3a1d118cd4f303795fc664f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
