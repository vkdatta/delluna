export const name="jamboard_kiosk-fill";
export const id="dl_f79898f045dbdc8ae12d";
export const url=new URL("../icons/jamboard_kiosk-fill.svg?v=2fbc2fb56e6fdb8007f181943eeb674691cd6eabd16b31838360212bf08b4b3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
