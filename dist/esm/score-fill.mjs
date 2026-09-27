export const name="score-fill";
export const id="dl_319b0b24bfbd8fd36a4f";
export const url=new URL("../icons/score-fill.svg?v=310d9c56eaed37085f30123f67153502a8fe570032cb52b011f082f17b5cb2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
