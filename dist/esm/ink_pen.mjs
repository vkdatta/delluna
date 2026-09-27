export const name="ink_pen";
export const id="dl_b75cf0cd74c3aaac30bf";
export const url=new URL("../icons/ink_pen.svg?v=5ce7836da2a76337c6b01c530f1d0171d062453a640ab425c910b2edfebe81fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
