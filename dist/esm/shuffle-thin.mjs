export const name="shuffle-thin";
export const id="dl_856160decc4164b2a33b";
export const url=new URL("../icons/shuffle-thin.svg?v=f5055405ea2fcebe717617e343498d56d16a422c027adac4e6f3d8f4a1bcc7dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
