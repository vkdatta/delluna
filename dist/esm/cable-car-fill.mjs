export const name="cable-car-fill";
export const id="dl_3c47ab80218e4d78969c";
export const url=new URL("../icons/cable-car-fill.svg?v=a2c1e4a392a16e8b6ca9a43f351e8355205af9e808882ecc9d77ce7e05589846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
