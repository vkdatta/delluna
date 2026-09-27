export const name="format_color_reset";
export const id="dl_02ea6763e7b7633f5f47";
export const url=new URL("../icons/format_color_reset.svg?v=5137c10ed24b75d486f37198c6937dcc3df0acfaae7805031bdb57b8af90c0b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
