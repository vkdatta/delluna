export const name="video-off";
export const id="dl_11da604534c84aa59087";
export const url=new URL("../icons/video-off.svg?v=2c1a2f6a69f1b6390dbee9e27133ff79a2d829eb14371546fe1aba02796ded5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
