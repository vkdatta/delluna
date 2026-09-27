export const name="waveform-slash-duotone";
export const id="dl_bb52d771e2e6963e3071";
export const url=new URL("../icons/waveform-slash-duotone.svg?v=68b7a00be2b2c8abf9098dad116b802d6ea36270cb5e69c41e30a063712371df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
