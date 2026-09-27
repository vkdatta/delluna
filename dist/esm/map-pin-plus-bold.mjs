export const name="map-pin-plus-bold";
export const id="dl_a871274480ea49b9b24a";
export const url=new URL("../icons/map-pin-plus-bold.svg?v=d8f28300a99d5d3038007ec4814d2a6ff8127cc83e570b368144bbe06c848de3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
