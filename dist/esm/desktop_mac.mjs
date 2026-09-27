export const name="desktop_mac";
export const id="dl_8c75b9d22b4e425a8987";
export const url=new URL("../icons/desktop_mac.svg?v=8ac2fa0dd2447c4aa68fd9b11820e05c80899fc0a84456c765751858fc31fff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
