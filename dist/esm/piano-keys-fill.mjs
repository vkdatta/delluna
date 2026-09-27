export const name="piano-keys-fill";
export const id="dl_4adefd7c55aa48a0b20f";
export const url=new URL("../icons/piano-keys-fill.svg?v=0192a19412538183f45b631a42ea1abb7bf0ab7d4c0c5bcb7b7c902d57bf37f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
