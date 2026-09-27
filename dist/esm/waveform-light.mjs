export const name="waveform-light";
export const id="dl_f883f0d8d84ecaf09843";
export const url=new URL("../icons/waveform-light.svg?v=81ccd69ae09b3f93b35054a68a5d6af6faafe49375c6de9ab664d59dc67b4d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
