export const name="lucid_1-arrow-right-from-line";
export const id="dl_ecd05a2706f54968aa92";
export const url=new URL("../icons/lucid_1-arrow-right-from-line.svg?v=e92f191333270fcd6f62382bb376bcde646eafbec9d5b083fe95f4cdba0fdbc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
