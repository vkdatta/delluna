export const name="google-logo-thin";
export const id="dl_aa04e655ebc5478f8c29";
export const url=new URL("../icons/google-logo-thin.svg?v=b089705d2301f9f4e44ec6ec4f92af2c4cb5e53c1fb31f64b0a22c6ae5ca68e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
