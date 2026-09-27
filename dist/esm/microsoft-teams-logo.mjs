export const name="microsoft-teams-logo";
export const id="dl_e8f7887de6e9411ab75d";
export const url=new URL("../icons/microsoft-teams-logo.svg?v=883d5e207db7fda012b7956aaec76a7db92fe6ac53c397221db28e9cf3ceeb85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
