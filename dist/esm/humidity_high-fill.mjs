export const name="humidity_high-fill";
export const id="dl_a79650f4e36647250918";
export const url=new URL("../icons/humidity_high-fill.svg?v=63eceef5f636870188a637c00948670a706d53aa45e71587dcc92f8b30f0a0f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
