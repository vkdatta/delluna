export const name="mobile_sound_off-fill";
export const id="dl_bf03480315ae4ad194f4";
export const url=new URL("../icons/M/mobile_sound_off-fill.svg?v=7277612721bb628b9212c9c8920160fb04c96a86081ccf49cc1797fc8ee4dbbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
