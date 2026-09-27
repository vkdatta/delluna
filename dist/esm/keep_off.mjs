export const name="keep_off";
export const id="dl_9a39ca9f6003124dd655";
export const url=new URL("../icons/keep_off.svg?v=4f1eeddbb82c6792e214c8028ab580ed30b71534cdfd1b5bfb1094cb2ab1dc2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
