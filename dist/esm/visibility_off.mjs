export const name="visibility_off";
export const id="dl_c995dde3ff0b493f9bcd";
export const url=new URL("../icons/V/visibility_off.svg?v=990546871d78475e447daf7caf17ae9d72d0d0883d54eb45012ab86f8fe5f876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
