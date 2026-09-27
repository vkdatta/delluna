export const name="waveform-slash-bold";
export const id="dl_6a3324f180e49129eccd";
export const url=new URL("../icons/waveform-slash-bold.svg?v=eff1716b6e3235fe63bdb2ba1a67c55ebabd979ab933e3ce62900f11672533f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
