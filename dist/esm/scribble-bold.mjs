export const name="scribble-bold";
export const id="dl_4a579cf2bf5c814fbe1c";
export const url=new URL("../icons/scribble-bold.svg?v=4a5d89c45ad8e84cd899c5d04c555121d47b7c79481ba3456d386cf64e874ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
