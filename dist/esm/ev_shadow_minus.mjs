export const name="ev_shadow_minus";
export const id="dl_82aa2f2794a5400abe2a";
export const url=new URL("../icons/ev_shadow_minus.svg?v=0ff287b9ae50198a8ab133e611effca55bd959f0a8be079ef9eceac73defc822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
