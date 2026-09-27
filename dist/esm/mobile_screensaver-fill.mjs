export const name="mobile_screensaver-fill";
export const id="dl_d120a766226cf45342e2";
export const url=new URL("../icons/mobile_screensaver-fill.svg?v=4d1ba7317e8ed16f4af80db8e923eb15c2639c5a4327a7fd1d90f251f9356a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
