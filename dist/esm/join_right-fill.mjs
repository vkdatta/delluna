export const name="join_right-fill";
export const id="dl_de2abd33a646523e575d";
export const url=new URL("../icons/join_right-fill.svg?v=1029040def1fab023ed729b8ea77bd9c0e7a8f036c8b11bd63e6c11463a4a7cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
