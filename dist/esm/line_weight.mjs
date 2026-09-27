export const name="line_weight";
export const id="dl_18b7bbedfbd6939d7985";
export const url=new URL("../icons/line_weight.svg?v=5d1e276c69d7de81ea6a43a0111ac7c6d4849eb0d3181666726f8f950891835f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
