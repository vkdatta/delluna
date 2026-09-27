export const name="settings_power-fill";
export const id="dl_c8a3c09b098d2f40a89a";
export const url=new URL("../icons/settings_power-fill.svg?v=6e31e63d01da3ddd26521bc4a967faef74c21ba35335a1942836a08cd13bdc8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
