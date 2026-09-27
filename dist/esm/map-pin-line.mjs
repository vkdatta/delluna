export const name="map-pin-line";
export const id="dl_7182260574a24f6087d4";
export const url=new URL("../icons/map-pin-line.svg?v=311531e0cd894cd41991b9a448763fcc5223b1d6e1d4239d44060c52cf0ae012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
