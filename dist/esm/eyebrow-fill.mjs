export const name="eyebrow-fill";
export const id="dl_37243f64d9c5488eb886";
export const url=new URL("../icons/eyebrow-fill.svg?v=2a573bef53a92935a43645f62193e4a9efb2a25917ea30444fe0b329ebae1745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
