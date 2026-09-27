export const name="faders-fill";
export const id="dl_ddb8754b66ef4549a2a2";
export const url=new URL("../icons/faders-fill.svg?v=04bab82164cca8d30f51f4648113b7e248dec9215c370678cb55f308619f61de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
