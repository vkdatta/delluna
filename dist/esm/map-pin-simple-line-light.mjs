export const name="map-pin-simple-line-light";
export const id="dl_a7420f057c394591a8ae";
export const url=new URL("../icons/map-pin-simple-line-light.svg?v=dd697e7414198185096963162912d6f2a4b30e7a2df8fa1a185a30e1e0d5fb34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
