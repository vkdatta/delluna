export const name="thermometer-duotone";
export const id="dl_7f97b1fa59b040277d28";
export const url=new URL("../icons/thermometer-duotone.svg?v=3c11fc8870789bbc7373aa92635f8a122a6232617ccf08f94389dd51a73af2cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
