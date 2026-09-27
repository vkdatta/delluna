export const name="switch_camera";
export const id="dl_debaa532755a3e330878";
export const url=new URL("../icons/switch_camera.svg?v=0a92440209aba0eac3e5a635a53ac90085363bcc4c07b325b66f5fffa69f24f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
