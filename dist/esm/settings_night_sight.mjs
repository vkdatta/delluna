export const name="settings_night_sight";
export const id="dl_5eb13b7ee9d4ea43fa8f";
export const url=new URL("../icons/settings_night_sight.svg?v=b0edaecdefff6e0eb86b1675343c2c0971cbf6b9022efc9d3597f74b56592261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
