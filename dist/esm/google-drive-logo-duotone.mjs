export const name="google-drive-logo-duotone";
export const id="dl_4cccd58034da468e9f53";
export const url=new URL("../icons/google-drive-logo-duotone.svg?v=1b6efca7e341c478b14446a8f248a0fb69fd9e61d0307fe1d2bb96e545ad3060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
