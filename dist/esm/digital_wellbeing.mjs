export const name="digital_wellbeing";
export const id="dl_d36e1afc9c794c5397fc";
export const url=new URL("../icons/D/digital_wellbeing.svg?v=0eae7567413d510bc04db94af29b4446b278cecb37904a8aa116dd00c716db78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
