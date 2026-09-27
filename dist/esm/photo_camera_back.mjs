export const name="photo_camera_back";
export const id="dl_8014b1b203ed255e60ee";
export const url=new URL("../icons/photo_camera_back.svg?v=d137246ccd39812845c3ae59dbd2f3158e59ec69b96a31aa51ff7ec7642fd824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
