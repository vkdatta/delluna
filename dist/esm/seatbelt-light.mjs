export const name="seatbelt-light";
export const id="dl_d73356d1de93f8e5ab20";
export const url=new URL("../icons/seatbelt-light.svg?v=095607c8182021551e82e6ece53d13cea3da4962958f1e8eecbef67974b36199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
