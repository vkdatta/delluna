export const name="crane-tower";
export const id="dl_d3b83c4923434910a4ec";
export const url=new URL("../icons/crane-tower.svg?v=b9f21c024fe1d3a057ea872e650ddfd9d57032a54ad6f6eff07caafa7d711927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
