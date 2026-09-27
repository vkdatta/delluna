export const name="music_off";
export const id="dl_0c2642458bff06c07350";
export const url=new URL("../icons/music_off.svg?v=9ac89297c218a74671d0e6496070d1f5abef867421bc98db20095e5b42eb5086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
