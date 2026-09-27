export const name="swipe-fill";
export const id="dl_fff2c203824ba08a5716";
export const url=new URL("../icons/swipe-fill.svg?v=d7d8ff82b9692df9dd25d16c374764f30305ca2d6cb863090b4172c0fa79f3f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
