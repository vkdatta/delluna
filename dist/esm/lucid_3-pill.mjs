export const name="lucid_3-pill";
export const id="dl_6f494a8475a143478ff4";
export const url=new URL("../icons/lucid_3-pill.svg?v=e0c899b47b2a3051a60133eee2cab59d86849ec402574cf42267925e161a1eeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
