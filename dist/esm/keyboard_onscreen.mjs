export const name="keyboard_onscreen";
export const id="dl_eb682595d4ba8b87c969";
export const url=new URL("../icons/keyboard_onscreen.svg?v=1c27a486848a14debbeb41bb94f5156e931a2d40031c1cc9b6d2371a961fefb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
