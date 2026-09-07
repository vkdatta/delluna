export const name="sock";
export const id="dl_972172bd85ac4a9cb419";
export const url=new URL("../icons/S/sock.svg?v=a6575b9bc0d5261445c6fdc77681540a05c41358cf1b578bff9630637ee6880f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
