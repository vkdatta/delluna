export const name="shield_locked";
export const id="dl_19fbedeeb35925da0318";
export const url=new URL("../icons/shield_locked.svg?v=6250a48fcb7e0da7b53efee3711422f127c6c08bbe153bbf6e7c87956252bf39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
