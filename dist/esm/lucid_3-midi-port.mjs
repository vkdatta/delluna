export const name="lucid_3-midi-port";
export const id="dl_8f40e32aa2b9418e8717";
export const url=new URL("../icons/lucid_3-midi-port.svg?v=bbe93b5e36d1603f847868541b4d877465d833102e7b767d42eedf254bae5881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
