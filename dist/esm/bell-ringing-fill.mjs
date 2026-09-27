export const name="bell-ringing-fill";
export const id="dl_614eb91ec2fc406e8060";
export const url=new URL("../icons/bell-ringing-fill.svg?v=75f261f80561f6c3b72a59ffbcf766db82a6e60d6e11d3643e80f134249f4433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
