export const name="steam-logo-bold";
export const id="dl_c162a267afbb18248536";
export const url=new URL("../icons/steam-logo-bold.svg?v=cbb1e376842f8098e58b9c9e631a34cb5d0bc6fa654472920e7d22fd8092bf29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
