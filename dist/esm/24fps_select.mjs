export const name="24fps_select";
export const id="dl_d524ced2af232ea79867";
export const url=new URL("../icons/24fps_select.svg?v=8b55be63a8a3366f92bcc47e51b9e944f5f21f9a6b4b42abcdd30cf4b2885f05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
