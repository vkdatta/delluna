export const name="flare-fill";
export const id="dl_bab4a09c79a2bc5be597";
export const url=new URL("../icons/flare-fill.svg?v=ab34ec30fee0701d455cec2379c598b9edaaf8bf55e756b11fa801c41d1f6ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
