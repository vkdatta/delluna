export const name="tv_signin";
export const id="dl_a46feb274c64f50d14ab";
export const url=new URL("../icons/tv_signin.svg?v=a0009dfd861ca05ca84da74789981477be90312ba8503724c16b34078eb182d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
