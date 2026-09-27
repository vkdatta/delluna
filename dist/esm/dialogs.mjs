export const name="dialogs";
export const id="dl_59004f638c30e3f33a24";
export const url=new URL("../icons/dialogs.svg?v=cea36f4ea800b1f870119be3500dfd94e78b5d86c2dece52d62d1d5d44c83fa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
