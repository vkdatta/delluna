export const name="stairs-duotone";
export const id="dl_9f0005dda58201bc8611";
export const url=new URL("../icons/stairs-duotone.svg?v=0936f727ddb66c7e5e066c901da0e21d2a95927bb35a59464836f772d0572ec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
