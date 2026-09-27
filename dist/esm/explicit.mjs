export const name="explicit";
export const id="dl_afb0008ebbbd807e7aff";
export const url=new URL("../icons/explicit.svg?v=65aa45bec5c86677fd294259b547856f9a13842136062028da2b90dd1aa3f801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
