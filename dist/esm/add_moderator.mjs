export const name="add_moderator";
export const id="dl_ef649d84d3c3171f4309";
export const url=new URL("../icons/add_moderator.svg?v=81ef9270e751f91e6826106dd2a30adc2e4acaf6f5d4a34debf09670e6848433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
