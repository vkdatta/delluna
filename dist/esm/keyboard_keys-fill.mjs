export const name="keyboard_keys-fill";
export const id="dl_1ec15d140763f2a8f716";
export const url=new URL("../icons/keyboard_keys-fill.svg?v=da036bcd88ad4fc4ab2ec3b0707b651ce7196f18c61e96c33b3baf0ea81d828a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
