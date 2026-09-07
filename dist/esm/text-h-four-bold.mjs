export const name="text-h-four-bold";
export const id="dl_5d4667656ade44b69b15";
export const url=new URL("../icons/T/text-h-four-bold.svg?v=e3b2d28d2f92e6e2727e70128c5b955abdc7cc2b48e0b9e1d8fdd822c0d0a834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
