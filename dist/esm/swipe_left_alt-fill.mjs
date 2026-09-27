export const name="swipe_left_alt-fill";
export const id="dl_db19cfd42c78337e1d5d";
export const url=new URL("../icons/swipe_left_alt-fill.svg?v=080313820b42ba3c885a0203faba7073ae9a1891752dcd3064695a14e49703a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
