export const name="video_camera_front_off";
export const id="dl_bcdaa8be25ec81184b64";
export const url=new URL("../icons/video_camera_front_off.svg?v=16c644dab378dfc70872f8b9733a72a1a4b4ae99614ed3615762b4b501626b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
