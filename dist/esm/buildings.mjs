export const name="buildings";
export const id="dl_fa2a6cca20814b51ad0d";
export const url=new URL("../icons/buildings.svg?v=e8ae0f392c287030e68ef42f8c7d5e9c32fc4a43d3340d434319eecf33d1256c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
