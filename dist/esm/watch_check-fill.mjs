export const name="watch_check-fill";
export const id="dl_19126d255e37fbd248bd";
export const url=new URL("../icons/watch_check-fill.svg?v=4a1e0cc309c3c08622f7b1f8ae784517c98756f7c42c2cb63e77d8ebcf576ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
