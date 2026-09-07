export const name="number-circle-six-light";
export const id="dl_e4631d86b11d48ad95bc";
export const url=new URL("../icons/number-circle-six-light.svg?v=ec95391ba2e1c7387b0ac41309c8ff2ca0b2b881b7dcba76793dd5d51b6d8cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
