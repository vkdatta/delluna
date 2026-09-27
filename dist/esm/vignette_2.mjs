export const name="vignette_2";
export const id="dl_9e7ed21600c4a61aa324";
export const url=new URL("../icons/vignette_2.svg?v=3ad29ce7fb6716de323f8cc44097c497fab8569c7f96f576d00f16e29a0c8bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
