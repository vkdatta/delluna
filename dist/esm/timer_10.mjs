export const name="timer_10";
export const id="dl_6136e25e2693182fe97f";
export const url=new URL("../icons/timer_10.svg?v=d9ce493b375d7e1608d87a1a47a852260a318c9ff6bf185944d26d5fb65a3d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
