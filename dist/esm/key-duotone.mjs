export const name="key-duotone";
export const id="dl_9b6ab012e80a404fb423";
export const url=new URL("../icons/key-duotone.svg?v=c84fa84d090e51e1a43b2eebf3182c3cfb2c98cf64a2a7fab35b748ee2744c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
