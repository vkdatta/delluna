export const name="settings_seating";
export const id="dl_1c5ba57e7fbeb7af0f90";
export const url=new URL("../icons/settings_seating.svg?v=f485ad00254a0bdf0314f3a32dfd4ddb81e96a162aca54bc46ccce8325673b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
