export const name="bell-ringing";
export const id="dl_ac2098e2ac95458b91c6";
export const url=new URL("../icons/bell-ringing.svg?v=f4036be81f1b308ff154c9ca1e1472dd2bb4bb16e8d5f1c910f91eb475ebc460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
