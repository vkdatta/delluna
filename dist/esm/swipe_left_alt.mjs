export const name="swipe_left_alt";
export const id="dl_19caca5e5dd3a70cd76d";
export const url=new URL("../icons/swipe_left_alt.svg?v=9e17f5c92f4fa02476184292783d7628674bd7db3e985c65a439429e82908b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
