export const name="phone-disconnect-fill";
export const id="dl_cc29ecc23bde4c94a09d";
export const url=new URL("../icons/phone-disconnect-fill.svg?v=15996d65a74424921e84c8e40e94fb43da650183476abb00b3d1498d2400ffc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
