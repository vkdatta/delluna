export const name="screenshot_frame_2-fill";
export const id="dl_84bdc3c0da774523a9ab";
export const url=new URL("../icons/screenshot_frame_2-fill.svg?v=527e9f094cabb83c76a827ef3ba839a9f01217009704b247860444c78b5490b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
