export const name="mouse-scroll-light";
export const id="dl_9662110c9e0c44d29902";
export const url=new URL("../icons/mouse-scroll-light.svg?v=14468f1a8e2ac936650ee6a9713dacc1f8f09923e1a0aeee955d52b9417cc7ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
