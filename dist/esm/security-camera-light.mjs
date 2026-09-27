export const name="security-camera-light";
export const id="dl_a9d9064f148e1161002c";
export const url=new URL("../icons/security-camera-light.svg?v=cbfece0e23a4d0255c87ce3883a9ed2385025487f9d11027f70cc983526210cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
