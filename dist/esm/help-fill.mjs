export const name="help-fill";
export const id="dl_97956bd8adfa20ea9d05";
export const url=new URL("../icons/help-fill.svg?v=a95a708462a9069839a8a1891d066a6e790718f989a00cd8c17bb1d5d7d2812c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
