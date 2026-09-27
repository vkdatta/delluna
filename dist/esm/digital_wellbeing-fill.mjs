export const name="digital_wellbeing-fill";
export const id="dl_a7f3791ca554d8942f69";
export const url=new URL("../icons/digital_wellbeing-fill.svg?v=9e9faabecc2d05f533e3927a752315eab4d334c3b20770d5618d6fd47a228adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
