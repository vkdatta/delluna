export const name="mobile_speaker-fill";
export const id="dl_00d94df61499ae9ef86a";
export const url=new URL("../icons/mobile_speaker-fill.svg?v=057e8893008cc654490da007906492d229e2d79ed34043eb3cb014541aa13d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
