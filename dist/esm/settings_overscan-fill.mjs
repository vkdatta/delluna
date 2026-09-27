export const name="settings_overscan-fill";
export const id="dl_4b6d0727c523eacfa6f1";
export const url=new URL("../icons/settings_overscan-fill.svg?v=849e05993285e058936b399780ac1452c69de18497872f87215f5f537d74e446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
