export const name="sticky_note_2-fill";
export const id="dl_055f1df4997540d1aa00";
export const url=new URL("../icons/sticky_note_2-fill.svg?v=128d6bc400b0534b592dacca9c3aa2f6957077069e00cce336f6bc9bbfd894fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
