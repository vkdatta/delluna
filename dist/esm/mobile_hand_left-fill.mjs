export const name="mobile_hand_left-fill";
export const id="dl_d70c5dcf60ec32dde3bb";
export const url=new URL("../icons/mobile_hand_left-fill.svg?v=e9f883fec5482b0bab85e051121096318cb560c88b3ca7e01450e0d02ef08197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
