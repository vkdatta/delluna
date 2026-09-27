export const name="lucid_1-air-vent";
export const id="dl_6829cf83da0d41e0b4be";
export const url=new URL("../icons/lucid_1-air-vent.svg?v=793967a95080344b1fa4304e83eae394cd630254024b5b94357b40b46704a214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
