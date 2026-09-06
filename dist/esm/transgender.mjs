export const name="transgender";
export const id="dl_3802ddf7cb2a418b8445";
export const url=new URL("../icons/transgender.svg?v=e8d1209f463f0d686ba048e52fcaa7a59a1a8f2742f20fab387fca7213bcefe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
