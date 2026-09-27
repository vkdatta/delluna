export const name="nest_audio-fill";
export const id="dl_feed86b0c1282ffae282";
export const url=new URL("../icons/nest_audio-fill.svg?v=59f8e9b98f70114a4d65d17094984bdc4a28dd2746399b6af1e65c7bdac0f016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
