export const name="skillet_cooktop-fill";
export const id="dl_a2b43a478103f784e0a0";
export const url=new URL("../icons/skillet_cooktop-fill.svg?v=7e0027846fc60a85081e64c403ba900287a5b0af7a8ffb849cd90ffdb07a8aeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
