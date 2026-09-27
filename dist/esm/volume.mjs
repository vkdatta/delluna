export const name="volume";
export const id="dl_3f3d1200c14b479ab182";
export const url=new URL("../icons/volume.svg?v=db8810e71f4e0c0eb50d8687ff0b47b596c0a184f523a603df4f88eeeb9ea60a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
