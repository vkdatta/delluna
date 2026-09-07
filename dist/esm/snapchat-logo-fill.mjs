export const name="snapchat-logo-fill";
export const id="dl_7e3e7cc60d5f4fdd9317";
export const url=new URL("../icons/S/snapchat-logo-fill.svg?v=9a7888c82a1fd485e083d9c08eea2a5a7da39fa31234567c97992c4e0757ab57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
