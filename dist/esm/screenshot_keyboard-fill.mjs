export const name="screenshot_keyboard-fill";
export const id="dl_30c5d82cf19bb42b73f3";
export const url=new URL("../icons/screenshot_keyboard-fill.svg?v=b0aeb7364fdc2f3b3a5629fca83738d4640b98e05f29bc69cfb100ed65a31528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
