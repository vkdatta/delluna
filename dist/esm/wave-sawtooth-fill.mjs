export const name="wave-sawtooth-fill";
export const id="dl_26a6a2c60eaefb8634a3";
export const url=new URL("../icons/wave-sawtooth-fill.svg?v=d26622998fbd3dc24d0dfbf79c05ce34036c33d3618ced413eef71c5e6c70b39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
