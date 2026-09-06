export const name="lucid_2-file-image";
export const id="dl_b9e00dd4887147c3a595";
export const url=new URL("../icons/lucid_2-file-image.svg?v=9f3137b3442dd8026cde3fa9b9a4fdac681f49e2aa5eed380c16f76324dbdeef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
