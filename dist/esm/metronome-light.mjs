export const name="metronome-light";
export const id="dl_c4db1bdd370944c2ba30";
export const url=new URL("../icons/metronome-light.svg?v=b7b01e4afb3923eaafa6b2aa1745d96ca82e1b7b9f1110011310d1d15adc20ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
