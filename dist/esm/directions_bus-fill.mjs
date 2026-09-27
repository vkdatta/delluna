export const name="directions_bus-fill";
export const id="dl_136b76587bd34404766f";
export const url=new URL("../icons/directions_bus-fill.svg?v=584c65eb4bed855d113b0cc1c5f16092c398c9db293713582823ba75244bd8a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
