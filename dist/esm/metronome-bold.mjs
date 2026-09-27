export const name="metronome-bold";
export const id="dl_a11cf986c8e14d2bbca7";
export const url=new URL("../icons/metronome-bold.svg?v=046ac5f68dac0c543400c6733d5b9df93206d71a388e5948d29ce2a60b2905f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
