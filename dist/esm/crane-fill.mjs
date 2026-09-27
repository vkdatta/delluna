export const name="crane-fill";
export const id="dl_9ca947349fc04c65a769";
export const url=new URL("../icons/crane-fill.svg?v=f0b6b165d9360771d58f156cb4b6b4a36aae4d62bb5dea8449b286c47ea077b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
