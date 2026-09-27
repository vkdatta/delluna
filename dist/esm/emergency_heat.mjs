export const name="emergency_heat";
export const id="dl_dc7edc078cd56799cef7";
export const url=new URL("../icons/emergency_heat.svg?v=9c150e5dc1f9d5cc83b605b08af3f54606e19486d2cae22922761fe8aa9091c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
