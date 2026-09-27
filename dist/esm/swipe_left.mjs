export const name="swipe_left";
export const id="dl_b5efe7f718e963a88d2c";
export const url=new URL("../icons/swipe_left.svg?v=ee0f016f239f9af2c560a8b3f73a1f38cd917e889b52dbf72816d670fe55496d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
