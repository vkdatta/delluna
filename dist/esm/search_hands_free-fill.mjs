export const name="search_hands_free-fill";
export const id="dl_fe4dff372ac43edf2b4a";
export const url=new URL("../icons/search_hands_free-fill.svg?v=2461e7e00a78b7cfbdfcf71f47f98d0239eacea0a9880baf45d94e6242551fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
