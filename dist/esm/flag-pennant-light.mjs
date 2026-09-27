export const name="flag-pennant-light";
export const id="dl_c14b0f3bc6f14593a748";
export const url=new URL("../icons/flag-pennant-light.svg?v=2f21844eee56b21f9698a3f848e37b1f556e0144d7642b0e6a11100f1dedc2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
