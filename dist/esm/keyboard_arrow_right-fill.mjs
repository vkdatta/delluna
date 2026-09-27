export const name="keyboard_arrow_right-fill";
export const id="dl_4e3d481ab32838ce6b7f";
export const url=new URL("../icons/keyboard_arrow_right-fill.svg?v=2ced974b4847e257c0efb6872bcb8e56f0b9d24f034df9b040588d9703f6ed20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
