export const name="unfold_up";
export const id="dl_280b28aa99184961bc8f";
export const url=new URL("../icons/all_60_named_svgs/unfold_up.svg?v=9305ad0e967cdba7b0d2b170c992c67ff471be5c397790cd761fe43a10ebf084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
