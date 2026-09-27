export const name="pulmonology";
export const id="dl_be35494d383628335e9d";
export const url=new URL("../icons/pulmonology.svg?v=2fccd6c3ebec1ed197463ec7f435dad130d0d3705e6584fa311839a745d12b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
