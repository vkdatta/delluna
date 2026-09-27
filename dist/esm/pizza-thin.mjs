export const name="pizza-thin";
export const id="dl_dfaee60244cd44d7aa9e";
export const url=new URL("../icons/pizza-thin.svg?v=8c345f01a8c01a1d3f17c732428c631d422ae2b891a12fbe0e1f786dac63d00e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
