export const name="adaptive_audio_mic";
export const id="dl_a612069c3b0745cd9054";
export const url=new URL("../icons/adaptive_audio_mic.svg?v=a1b4a655d9afdb80b1ec95cb73a9bf7c53522f756d9bc997a448e36f5b9c4140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
