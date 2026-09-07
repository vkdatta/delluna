export const name="shipping-container-thin";
export const id="dl_0898953953ef46518739";
export const url=new URL("../icons/S/shipping-container-thin.svg?v=1b454192fb05f27130a2a50461fcd241f7f673073a33c78ebddb7333cb3cbc16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
