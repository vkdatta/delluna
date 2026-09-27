export const name="hand-eye-thin";
export const id="dl_fe5ec59c7553421e859f";
export const url=new URL("../icons/hand-eye-thin.svg?v=852d9f3ba8a67b824435547f573b42d66bb06294047022e43abfb3e0fc2d5e18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
