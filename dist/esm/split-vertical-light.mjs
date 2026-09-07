export const name="split-vertical-light";
export const id="dl_f0f3368cee8342019c61";
export const url=new URL("../icons/S/split-vertical-light.svg?v=ff85ed21aa927a303ea1c55de2efb9255ca37a8243e9093b06669273181c4700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
