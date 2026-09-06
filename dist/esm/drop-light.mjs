export const name="drop-light";
export const id="dl_ec76e7738d754c248fd4";
export const url=new URL("../icons/drop-light.svg?v=2067c983a7d443fa33515189fe1b21bece9e5a4deb5035302db8e300d3db5a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
