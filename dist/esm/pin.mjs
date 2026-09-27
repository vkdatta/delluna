export const name="pin";
export const id="dl_1fa0791a5a2aff8fb4bb";
export const url=new URL("../icons/pin.svg?v=2075069d5c226c5f3e01f64d42b459a377d6c3796d98124f8b9affcfc76fbc2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
