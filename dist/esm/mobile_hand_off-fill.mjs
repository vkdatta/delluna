export const name="mobile_hand_off-fill";
export const id="dl_fdeb0a21834782d8f975";
export const url=new URL("../icons/mobile_hand_off-fill.svg?v=c5c3dc17a45e6552b31408d6c56cd1ed7f08a84a099109930a27c37bda1e7e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
