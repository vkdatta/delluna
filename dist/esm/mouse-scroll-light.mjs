export const name="mouse-scroll-light";
export const id="dl_9662110c9e0c44d29902";
export const url=new URL("../icons/mouse-scroll-light.svg?v=3d321c2a88e3df75813e50c541d697650655fe914c6bb012a4294ff291b283fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
