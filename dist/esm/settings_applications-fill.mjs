export const name="settings_applications-fill";
export const id="dl_59c48215b92545e4b25a";
export const url=new URL("../icons/S/settings_applications-fill.svg?v=57531614993c879666a5e8a49ee766d4c0732d6541b801acd71056a09580300d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
