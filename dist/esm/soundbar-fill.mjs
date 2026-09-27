export const name="soundbar-fill";
export const id="dl_c058b93bf9438eb2a720";
export const url=new URL("../icons/soundbar-fill.svg?v=9b62c5a192d239e2d500b715a7e496b2a0812238530eef018eadfaf3db02aa80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
