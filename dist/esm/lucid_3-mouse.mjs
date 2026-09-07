export const name="lucid_3-mouse";
export const id="dl_29756c43294249349af0";
export const url=new URL("../icons/lucid_3-mouse.svg?v=a67b5e087f8f3f336382a4fc9bd469ed34b6d11a6a71211977735ad977518dc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
