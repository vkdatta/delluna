export const name="mic_double-fill";
export const id="dl_800b4ca65031da758dbd";
export const url=new URL("../icons/mic_double-fill.svg?v=623d61cd773fc1b25ef0081c3036f0aa7c06de88c6316f1ea6ff8add2257c15f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
