export const name="broadcast-light";
export const id="dl_c80aa08f9b83491fbf68";
export const url=new URL("../icons/broadcast-light.svg?v=8b1f7978697409c5492b904ec7d43e870afb40b78b8ba0f4b0b27608087380a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
