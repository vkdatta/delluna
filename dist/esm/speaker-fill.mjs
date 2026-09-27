export const name="speaker-fill";
export const id="dl_1fa43501f0b8e9a507eb";
export const url=new URL("../icons/speaker-fill.svg?v=2fbc2b39241a9f0b6c782df80fab07d7afb8ea544e546d6343f4d0c0b1c6229f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
