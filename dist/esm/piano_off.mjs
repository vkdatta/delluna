export const name="piano_off";
export const id="dl_b71e227d57601a3a1886";
export const url=new URL("../icons/piano_off.svg?v=17c1db39611b9b1b594423096bbdbb4942d31d3af06f40e2be11f77c99759a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
