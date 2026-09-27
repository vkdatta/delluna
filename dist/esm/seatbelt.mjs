export const name="seatbelt";
export const id="dl_f56b41b5b283d320dce4";
export const url=new URL("../icons/seatbelt.svg?v=a9036f795bbebdd8db95ebdbc2249d006767ea3f020afab2007a6c8e9b2cb4a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
