export const name="confetti-fill";
export const id="dl_8c44a57cd205460ba61b";
export const url=new URL("../icons/confetti-fill.svg?v=03ca7430929d486029dd0c92ba351374d181d2722ceede0b600d983e87efd993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
