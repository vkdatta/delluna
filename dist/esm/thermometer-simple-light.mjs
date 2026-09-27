export const name="thermometer-simple-light";
export const id="dl_eb4344f9051924eff91c";
export const url=new URL("../icons/thermometer-simple-light.svg?v=9ce9810b25d774b5c6c6c3f2396d78923026549d63114cec7a1b0995876082e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
