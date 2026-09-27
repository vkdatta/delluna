export const name="connected_tv";
export const id="dl_fbf4177c342d8412c144";
export const url=new URL("../icons/connected_tv.svg?v=a2172e8ccb12f5401449d8f32c1b5a96e9f89434d7cd63d15766c87215b837af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
