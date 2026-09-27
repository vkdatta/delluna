export const name="video-camera-duotone";
export const id="dl_e9b09dfd87dcc0c87171";
export const url=new URL("../icons/video-camera-duotone.svg?v=4e29e98e835ffa01c1fb8064222eba616d0aed6beaa0f642a23e5fd6145866b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
