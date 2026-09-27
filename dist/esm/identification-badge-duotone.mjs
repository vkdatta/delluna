export const name="identification-badge-duotone";
export const id="dl_57dbb77c478d498a9ce9";
export const url=new URL("../icons/identification-badge-duotone.svg?v=abb9f0033bddb38c0c26cbe554c72a5557d2087104ff248cb0c6f4c0b580276e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
