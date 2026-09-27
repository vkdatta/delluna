export const name="trademark";
export const id="dl_a8a39e5dea54c70d56ea";
export const url=new URL("../icons/trademark.svg?v=2e52a365e7cf19960e5f6696335519e1cc0c67bd7749c1aae1634f9d27fd288f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
