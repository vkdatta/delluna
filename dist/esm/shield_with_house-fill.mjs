export const name="shield_with_house-fill";
export const id="dl_c4c15b802ad8404db175";
export const url=new URL("../icons/shield_with_house-fill.svg?v=623c7ebe4e6f22aa4b4577226758c5fee79b4dd3123baf8b47b1e8197a43b547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
