export const name="settings_power";
export const id="dl_e08198fb37dfe0c489a1";
export const url=new URL("../icons/settings_power.svg?v=f0daca36f859b340d7b265f9fd50d136e3cac21a73f63d909689658bcea77688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
