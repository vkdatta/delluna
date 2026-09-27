export const name="night_sight_auto_off";
export const id="dl_30dab0a633b1b01b571d";
export const url=new URL("../icons/night_sight_auto_off.svg?v=5ac267c6181f19fed5e5f29a35d2b0882bb796e423bc4cb6e91372891378aacd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
