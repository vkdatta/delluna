export const name="siren_check";
export const id="dl_1a0191fb05c88955011a";
export const url=new URL("../icons/siren_check.svg?v=b05b7eb11e3cb102b1566d8805fe48b847aec4d7629475382401971f9e49aae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
