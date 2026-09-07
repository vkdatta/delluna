export const name="waveform";
export const id="dl_8b3f9747688f4c73971f";
export const url=new URL("../icons/W/waveform.svg?v=8f6a47cff9b0fb3a8f25fe411b9cc1b24d063d6577c8d07cc53b0e9b080afaa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
