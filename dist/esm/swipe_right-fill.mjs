export const name="swipe_right-fill";
export const id="dl_7a1d9350c9a292163223";
export const url=new URL("../icons/swipe_right-fill.svg?v=d8adcd9c491f2c3536f199c6c65042a7fc01c35cdf2cbd1e6ded977bb0aad424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
