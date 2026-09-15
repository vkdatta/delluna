export const name="buttons_alt";
export const id="dl_8df7cd38036d42afbcb3";
export const url=new URL("../icons/B/buttons_alt.svg?v=c93118090322d9df4ef0202e8f21e216a8de62833f43346a5125fbd7b6fb7ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
