export const name="format_image_inline_right";
export const id="dl_ef334a745cb8ef5ccdba";
export const url=new URL("../icons/format_image_inline_right.svg?v=3ade591307807659040e373ac8089d41b403c8a9053b4bf36ec375829d787a75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
