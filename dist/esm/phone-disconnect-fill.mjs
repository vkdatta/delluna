export const name="phone-disconnect-fill";
export const id="dl_cc29ecc23bde4c94a09d";
export const url=new URL("../icons/phone-disconnect-fill.svg?v=dc62a255acc44056fac54d868aae8ba947029866d358c3d3a781b4842b4ac016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
