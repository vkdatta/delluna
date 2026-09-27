export const name="timer";
export const id="dl_85bf35fa22f24b30a410";
export const url=new URL("../icons/timer.svg?v=0d01ba1370ce9d88d237ac513d9d96b8c81a1188316abfcc03734c2c2c70b176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
