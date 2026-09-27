export const name="cognition_2-fill";
export const id="dl_6a60572ed18a5cde5610";
export const url=new URL("../icons/cognition_2-fill.svg?v=ce12dcd2343bbda256ca68ade83aab488185ae943b9ecfb20f521961fe7c0e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
