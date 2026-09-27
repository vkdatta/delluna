export const name="speaker-x-thin";
export const id="dl_4a26a05fb197a20a1c1f";
export const url=new URL("../icons/speaker-x-thin.svg?v=a84a73be539d8a4babbd83b9bb90b0a675757f0343cdef9f252ea7fb649fb761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
