export const name="volume_down-fill";
export const id="dl_085021e9de8949849d1b";
export const url=new URL("../icons/volume_down-fill.svg?v=68b0b5c979718ea5338538da46fbd95002a60d0db63221ec7a351e99f9062ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
