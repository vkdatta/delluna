export const name="speaker-hifi-fill";
export const id="dl_22ca9fb1dac74e33882f";
export const url=new URL("../icons/S/speaker-hifi-fill.svg?v=b8e42890831b067f83f89fc8dca20725a5a9b64016e03d3f2f466501994573b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
