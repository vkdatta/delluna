export const name="video_library-fill";
export const id="dl_7f7c12a09cc541bff54d";
export const url=new URL("../icons/video_library-fill.svg?v=6ce1b06b0b7f871c2f796a81e709a2134305d4899ce4f7fa16ffa4f246bee4dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
