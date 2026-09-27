export const name="globe";
export const id="dl_b5f3f5a65a074bcba617";
export const url=new URL("../icons/globe.svg?v=1ed12da8ba0a2da2f2647a25c744ceda33372a1545081afc95e3844a0b98b7da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
