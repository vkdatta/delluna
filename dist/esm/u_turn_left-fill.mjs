export const name="u_turn_left-fill";
export const id="dl_8afa0c5c02761ae3f8cb";
export const url=new URL("../icons/u_turn_left-fill.svg?v=8ad35d52752645931b6d1cde319de36e5385da5b45ff210d2f47659fe08b2bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
