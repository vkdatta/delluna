export const name="single-slash";
export const id="dl_f7be94555b5eee8364f4";
export const url=new URL("../icons/single-slash.svg?v=b382d5ba9b6b2a3dfe1491ef69c925d816cbfe889a7229ac3fe693d23a6137ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
