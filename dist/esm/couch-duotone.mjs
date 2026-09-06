export const name="couch-duotone";
export const id="dl_6ae96a20c7354a5196da";
export const url=new URL("../icons/couch-duotone.svg?v=b36579b66415e8d798b8e584932932d00c9a52873eb341408d78cdfc80a32243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
