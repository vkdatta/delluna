export const name="waveform-bold";
export const id="dl_2fba5a73e2a4d9ddf281";
export const url=new URL("../icons/waveform-bold.svg?v=84b12a655f6689c479bcc930bbaa071c14ce1870dbacae14f3a15092f013c6d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
