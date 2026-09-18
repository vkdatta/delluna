export const name="video_settings-fill";
export const id="dl_54a942d9811c4127ac2a";
export const url=new URL("../icons/V/video_settings-fill.svg?v=11223331b0506bf0124fa559f1890ca76a9cc08da9ebc04ed8fdf9278b010065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
