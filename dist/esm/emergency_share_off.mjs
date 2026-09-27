export const name="emergency_share_off";
export const id="dl_e11b3e3b6cc2db054fee";
export const url=new URL("../icons/emergency_share_off.svg?v=e378160dee868509c171582b65160c4de409f0df8b976aa9e61fde018c3fb03e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
