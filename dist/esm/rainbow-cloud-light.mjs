export const name="rainbow-cloud-light";
export const id="dl_384bd2898ded45c48c29";
export const url=new URL("../icons/rainbow-cloud-light.svg?v=63df11738457c6416c3b05184557648650fe8e3612e96a60d33132378031e04c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
