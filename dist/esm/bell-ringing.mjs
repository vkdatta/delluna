export const name="bell-ringing";
export const id="dl_ac2098e2ac95458b91c6";
export const url=new URL("../icons/bell-ringing.svg?v=c9bacba29e3d321561d949eeb0b546cce38624ddfc6b1aed271e170629268d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
