export const name="bell-simple-ringing-thin";
export const id="dl_67395d32a2c3445ea5e5";
export const url=new URL("../icons/bell-simple-ringing-thin.svg?v=197685db914b130a0da456bfd9913268800ca40bc98974ef60794a56e7c19b3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
