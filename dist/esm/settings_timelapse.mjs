export const name="settings_timelapse";
export const id="dl_969af8b547234350a2ec";
export const url=new URL("../icons/S/settings_timelapse.svg?v=5012c7d1081b73caec80f9d3d707197af2b5798f208a35fa44427eb3bc5378b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
