export const name="phone-call-bold";
export const id="dl_6339044eb2d042879b18";
export const url=new URL("../icons/phone-call-bold.svg?v=dcadc26f69496902c9b0426c2796b032ca97b9831749abf94ea5cc6c3a0ccde5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
