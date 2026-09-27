export const name="selection-background-bold";
export const id="dl_4511950a8cc967896405";
export const url=new URL("../icons/selection-background-bold.svg?v=f003f620c6de4c0769ddea59bc0fbe37c16499828c2213b6c5eef73e1f577b19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
