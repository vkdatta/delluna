export const name="circle-half-tilt-thin";
export const id="dl_241f7d4a405d47a4b5ee";
export const url=new URL("../icons/circle-half-tilt-thin.svg?v=40bf671e33c89516fd86df07f7a1b222703f3415da79a3c5e6f4891c2ca959dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
