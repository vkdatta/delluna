export const name="okonomiyaki-fill";
export const id="dl_76e7efa8f1808de36e6a";
export const url=new URL("../icons/okonomiyaki-fill.svg?v=42205163306b20c0927dfaf382ebba47b00706314207fefd7a7399568c272f99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
