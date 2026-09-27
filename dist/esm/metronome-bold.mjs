export const name="metronome-bold";
export const id="dl_a11cf986c8e14d2bbca7";
export const url=new URL("../icons/metronome-bold.svg?v=d21856896a3ad4b1d9ad8256c160487588e1333e8c6417a0c82323dda27eee36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
