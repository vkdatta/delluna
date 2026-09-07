export const name="steering-wheel-thin";
export const id="dl_585d5ee44b1a4549897a";
export const url=new URL("../icons/S/steering-wheel-thin.svg?v=56487afa6ae1a1ed18b16457dfb38aa46b0f9b73723dc91e213d577a56bb613d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
