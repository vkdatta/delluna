export const name="settings_heart-fill";
export const id="dl_ed455f982d7341f5b480";
export const url=new URL("../icons/settings_heart-fill.svg?v=c357aec7a5e49de481306f0e4be822d2b35de6497adba271a0413c980d45442d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
