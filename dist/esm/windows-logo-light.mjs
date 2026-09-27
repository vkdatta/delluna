export const name="windows-logo-light";
export const id="dl_e284e22d91c16bdf21b9";
export const url=new URL("../icons/windows-logo-light.svg?v=610015c60abe689460727afe928fc1faf63ed894d75d42731c2d7839a1301e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
