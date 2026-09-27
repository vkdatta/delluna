export const name="screencast-bold";
export const id="dl_97d6721da26ef23d92dd";
export const url=new URL("../icons/screencast-bold.svg?v=6a849ad83196bfda9ad48189daaf9fc7edf58556550456b2f515e664dcdcc41c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
