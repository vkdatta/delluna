export const name="binary-duotone";
export const id="dl_7f1d9d6d73e0479ab4f0";
export const url=new URL("../icons/binary-duotone.svg?v=10a285e2b88c6fec286c1577fd62cfdd943f127ac5d4c6897ab223052ac00c81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
