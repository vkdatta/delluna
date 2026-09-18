export const name="mic_gear";
export const id="dl_73cd80c81f29430f8bab";
export const url=new URL("../icons/mic_gear.svg?v=1aa27373e63efba62e4446ec07ba06f6ecdee3e2043ee44d9a4ac87ee451d912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
