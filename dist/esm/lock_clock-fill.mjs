export const name="lock_clock-fill";
export const id="dl_bfdcb489fdac09f3da25";
export const url=new URL("../icons/lock_clock-fill.svg?v=21f3a966b21f96312994b74ac6c8e0125a8b63fbefecd5105e6127da416eeb72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
