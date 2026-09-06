export const name="plus-bold";
export const id="dl_34f9a468de78427ea682";
export const url=new URL("../icons/plus-bold.svg?v=3d20a4b2e00657baeb922bed94f13fbfa288968b738991d047dd252cb64005d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
