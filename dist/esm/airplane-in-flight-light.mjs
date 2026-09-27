export const name="airplane-in-flight-light";
export const id="dl_7243710ae9764c53b90d";
export const url=new URL("../icons/airplane-in-flight-light.svg?v=745f988727e378ea0823c6991d4f05c62a499dbb43415889881c5e4c2340bbcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
