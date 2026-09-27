export const name="lucid_3-refresh-ccw-dot";
export const id="dl_2b1dfe63e14842f48530";
export const url=new URL("../icons/lucid_3-refresh-ccw-dot.svg?v=5b3f495b59becc3a0553a29315f9c00f85b5ffc11e66df0dd6bf3c5fb9131f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
