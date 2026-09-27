export const name="lucid_3-palette";
export const id="dl_a482b06081964538af4d";
export const url=new URL("../icons/lucid_3-palette.svg?v=19ca32d36627b40ce49b53b2f14cb773dd2c7d2f37a27de315fc1afd8ba12cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
