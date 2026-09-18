export const name="settings_input_svideo";
export const id="dl_128c3e79b8634597a0c9";
export const url=new URL("../icons/S/settings_input_svideo.svg?v=906ab0bcc161121e6de72df81d79cb3552d4612f967335649a1ff4c5fd82e320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
