export const name="video-off";
export const id="dl_11da604534c84aa59087";
export const url=new URL("../icons/video-off.svg?v=b729a11dc947807999961516fbb2cc974fe49cd4e5359a4ad4238ee33e05d317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
