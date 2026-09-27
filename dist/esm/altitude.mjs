export const name="altitude";
export const id="dl_1978835259ef7f8c8c35";
export const url=new URL("../icons/altitude.svg?v=a3074a5dacd3546d0703f39496ec6572df03670de819b618687a07b5dfe5c419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
