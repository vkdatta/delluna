export const name="release_alert-fill";
export const id="dl_7c65690b78fb9dc078b5";
export const url=new URL("../icons/release_alert-fill.svg?v=ae4ced79c9796debc3f1fc89303842a4aa3cbbd2546f2f60f83aaf08df9c66ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
