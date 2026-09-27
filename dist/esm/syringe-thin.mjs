export const name="syringe-thin";
export const id="dl_0c1b0b44e03dea2c7879";
export const url=new URL("../icons/syringe-thin.svg?v=181ec657d0242e3ab834363c97806635109c2c39efa3a208f999845c05f2c3fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
