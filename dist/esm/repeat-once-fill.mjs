export const name="repeat-once-fill";
export const id="dl_69a9799d38c949939b4f";
export const url=new URL("../icons/repeat-once-fill.svg?v=fad1d2a4091bb61124bc9a8f11b5a6468b55cbc8ec19b64a1f01ee42e718eef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
