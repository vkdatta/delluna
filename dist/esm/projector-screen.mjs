export const name="projector-screen";
export const id="dl_1d879513a22541ffad44";
export const url=new URL("../icons/projector-screen.svg?v=78d0b91717a53f261b7fa6b5426d147a57c2ac9c024fa64b84e11fbc673e9247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
