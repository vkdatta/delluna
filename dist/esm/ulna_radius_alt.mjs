export const name="ulna_radius_alt";
export const id="dl_9c15d0f1661f75cba4c3";
export const url=new URL("../icons/ulna_radius_alt.svg?v=ac5e47068c8e40cc998b7bf0630a71638af4e40dce425de58f017e976e2be684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
