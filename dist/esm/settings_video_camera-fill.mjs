export const name="settings_video_camera-fill";
export const id="dl_5d28a633ab69b9ab2f5b";
export const url=new URL("../icons/settings_video_camera-fill.svg?v=ce50dc186484a0cca46a14c86b24b4b9494d070458fd34956257d9099ae5acb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
