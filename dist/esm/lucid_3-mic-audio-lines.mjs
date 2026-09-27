export const name="lucid_3-mic-audio-lines";
export const id="dl_14efff81c80e4aa88e18";
export const url=new URL("../icons/lucid_3-mic-audio-lines.svg?v=a045f9a414a37f4c31324899328fab5541adc3dd14bd53a184843025cfbc147b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
