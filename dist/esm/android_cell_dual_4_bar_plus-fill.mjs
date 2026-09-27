export const name="android_cell_dual_4_bar_plus-fill";
export const id="dl_5cffdb485e76dd4b83f6";
export const url=new URL("../icons/android_cell_dual_4_bar_plus-fill.svg?v=b2bc7d4c8b104d5a0c30f02f741d6e4e4c0a1113ca86d892dd7cca7310138e72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
