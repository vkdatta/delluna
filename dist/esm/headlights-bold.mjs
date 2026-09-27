export const name="headlights-bold";
export const id="dl_bfa1f1a520ac4f69ba8d";
export const url=new URL("../icons/headlights-bold.svg?v=dc73b65f6014c72d5c98d6c6e6f6fbb41c0f03ad9a9a1337455c0b90f323c49c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
