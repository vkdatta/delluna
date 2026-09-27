export const name="office-chair";
export const id="dl_9bbbd9b3119b4e74ba96";
export const url=new URL("../icons/office-chair.svg?v=5881efb8cb9a8507f48c5eaaab6b3e1c170f9a9d9148a825e4a8c0f423ec92f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
