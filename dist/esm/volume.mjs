export const name="volume";
export const id="dl_3f3d1200c14b479ab182";
export const url=new URL("../icons/volume.svg?v=53a6b4242d57df5aa2a70d57396683427ee203be6e03389ac54aa341f4186c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
