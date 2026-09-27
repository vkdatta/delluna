export const name="tire";
export const id="dl_e6c70f0e0295ddd7864d";
export const url=new URL("../icons/tire.svg?v=19ad355d4ee3754944629d502dadac20bf1326ad3eb880e7e06cb54f33cc290c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
