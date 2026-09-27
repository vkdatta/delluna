export const name="lucid_1-audio-lines-off";
export const id="dl_39add77bd9584f2eb0a8";
export const url=new URL("../icons/lucid_1-audio-lines-off.svg?v=04083de6f54cc673abf720e685e865204414212529e32c59c5f18c8aa714e400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
