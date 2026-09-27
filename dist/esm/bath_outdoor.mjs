export const name="bath_outdoor";
export const id="dl_2c8aabdf8a7eaa186e78";
export const url=new URL("../icons/bath_outdoor.svg?v=8e7cc95147fbdb3efad7a36190aae64f880ae359fee5378615fe601bcd98bd57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
