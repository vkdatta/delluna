export const name="local_atm";
export const id="dl_e4601a39af6903c1f118";
export const url=new URL("../icons/local_atm.svg?v=5f1c51686a48990f246beafd8d9fa6c6d9bc0fd2f3a87147c04e35b69725d2ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
