export const name="swipe_up_alt";
export const id="dl_b7e779ff11d249379300";
export const url=new URL("../icons/S/swipe_up_alt.svg?v=0065a28787f39c2b99efb31323c65e944532ca035ae1635b29856a5a92e6c273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
