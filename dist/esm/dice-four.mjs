export const name="dice-four";
export const id="dl_5506344accf64968b505";
export const url=new URL("../icons/dice-four.svg?v=86c55f06a5e450cf67eb052c016b72536dc4b773f95be4848d1c940b6d834736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
