export const name="wave-sawtooth";
export const id="dl_9152f63ed0f2de34fdd6";
export const url=new URL("../icons/wave-sawtooth.svg?v=0d770d561c670c99cc1d77c8931a40c7344384816fa698332684aa25f7c08dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
