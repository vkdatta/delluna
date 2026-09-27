export const name="high_chair-fill";
export const id="dl_5285924a5ba41e74cc60";
export const url=new URL("../icons/high_chair-fill.svg?v=cf9142f4a6e41fdef19b3706571a7708ed447052829acaa4f3a16360e9076170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
