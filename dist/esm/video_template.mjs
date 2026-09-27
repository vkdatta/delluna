export const name="video_template";
export const id="dl_f68e5e47f95208aeff2e";
export const url=new URL("../icons/video_template.svg?v=ab2628ef0f636339396f6e9917c1882c61ecd92af62648d6ffca1d807d002e3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
