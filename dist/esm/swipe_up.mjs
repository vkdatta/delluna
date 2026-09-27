export const name="swipe_up";
export const id="dl_a183e38a9d6ca735b420";
export const url=new URL("../icons/swipe_up.svg?v=4819934d002313622ec3d13364616ae9a6fd917fe290e737fd0362c7c7e5b464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
