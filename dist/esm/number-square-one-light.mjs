export const name="number-square-one-light";
export const id="dl_4e34693b138a4615a748";
export const url=new URL("../icons/number-square-one-light.svg?v=2e9f666691d5395d48076b46a232a5a5ec4ee6267bb38be1ee3f41911b49e83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
