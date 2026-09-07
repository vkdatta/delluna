export const name="tote-light";
export const id="dl_b379e53399724fa3bb27";
export const url=new URL("../icons/T/tote-light.svg?v=831fb7b0e0cc6481df156d0dda35d736ab11a823cd209b3626b3534eeddd9793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
