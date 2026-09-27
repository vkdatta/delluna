export const name="sparkle-thin";
export const id="dl_f868278b1336f6120f53";
export const url=new URL("../icons/sparkle-thin.svg?v=4d003da1c9d7736ad83f31cb6df600cfc080047b40cec7d9278f23f008744309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
