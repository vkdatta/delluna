export const name="volume-off";
export const id="dl_00e60c8fe9d849d89d4d";
export const url=new URL("../icons/volume-off.svg?v=a21c3a53bb277a5f604bba93aa53eb04c38b922c70cc0f535b59391ed925d2dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
