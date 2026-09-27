export const name="tent-light";
export const id="dl_b51a05afb0e7fcb3a21b";
export const url=new URL("../icons/tent-light.svg?v=4873ca09f521461ba0d08edbe24f5d461f26e5e613dd0f5ebc0e7eb5565e1386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
