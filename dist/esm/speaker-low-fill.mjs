export const name="speaker-low-fill";
export const id="dl_2f91146070f0b47a4082";
export const url=new URL("../icons/speaker-low-fill.svg?v=a41709ce4c0db7c0bf4d99287d39fb9e0efc3cd0b2c17ac9f4b3fcb94ff3212d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
