export const name="hash-straight";
export const id="dl_d79bf25998e14834852b";
export const url=new URL("../icons/hash-straight.svg?v=a039519081b2b1d5b4adb120f5f9285ae81f2578a946309c0d90095b2aee6dfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
