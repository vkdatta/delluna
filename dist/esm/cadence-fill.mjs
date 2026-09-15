export const name="cadence-fill";
export const id="dl_889b631000324dbebc60";
export const url=new URL("../icons/C/cadence-fill.svg?v=f65f752fa0341cd1e0f84c874c8ddac3db4761b0decb80d381ee38703b281a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
