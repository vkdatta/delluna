export const name="file-pdf-fill";
export const id="dl_95ab054112f3414f8b00";
export const url=new URL("../icons/file-pdf-fill.svg?v=05e331e2e599448858ee09bc99483cf035a884740d9467579da2db4ca48ba13b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
