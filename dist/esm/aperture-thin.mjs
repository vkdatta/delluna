export const name="aperture-thin";
export const id="dl_61bc06ba408d41b589e2";
export const url=new URL("../icons/aperture-thin.svg?v=5c0f01aedf938fd9d027e6130ebd288305e06d2d44db7accb02d4b2ca976ef93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
