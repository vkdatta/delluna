export const name="atom-thin";
export const id="dl_9e1b4fb4133b48869487";
export const url=new URL("../icons/atom-thin.svg?v=6417d2387231a5fa7789464439b3fc668cdfaa3920d995cecc1ac2b1c2086dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
