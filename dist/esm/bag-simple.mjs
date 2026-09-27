export const name="bag-simple";
export const id="dl_d3ef483e61174290b03f";
export const url=new URL("../icons/bag-simple.svg?v=d72266ac2fe02524325a7d9df2aceac10e66f8b36e6a395d198ce89b17ddf004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
