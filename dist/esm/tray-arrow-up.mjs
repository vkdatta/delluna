export const name="tray-arrow-up";
export const id="dl_f03233097d29432f9f90";
export const url=new URL("../icons/T/tray-arrow-up.svg?v=2073e95049dd76d7e7ab2d80689eb5d12a2be3ae68e1cefe2674d118f9c261c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
