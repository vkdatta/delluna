export const name="emergency_heat_2-fill";
export const id="dl_793f387aa8567f03a7da";
export const url=new URL("../icons/emergency_heat_2-fill.svg?v=04e3950503bedc54c3a214c8dd2b9520bc9b93b33e0c838fcd4c1ffb800c960a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
