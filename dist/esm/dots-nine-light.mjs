export const name="dots-nine-light";
export const id="dl_d450e0ca1d664706b9e0";
export const url=new URL("../icons/dots-nine-light.svg?v=1f620228e6ff0c877ed851e2675bb7a360e357260d54cfccfb10b4fe10764494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
