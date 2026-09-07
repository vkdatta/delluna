export const name="sign-out";
export const id="dl_ef4f2cef8fab4726bbcc";
export const url=new URL("../icons/S/sign-out.svg?v=511fe7958ef31f8904185631fd7045c11f35c8034a2a64ccb3bdcc4dfa81df77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
