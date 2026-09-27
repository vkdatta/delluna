export const name="mobile_theft-fill";
export const id="dl_d8b6ca191e012f50719a";
export const url=new URL("../icons/mobile_theft-fill.svg?v=94c59fe9bfd1c451b1dced73146beeea30e6d83ecdc4685377e70c2ca9f0bcf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
