export const name="trackpad_input";
export const id="dl_1d086ee9a9a849e7b73b";
export const url=new URL("../icons/T/trackpad_input.svg?v=611536e8f9c5c411096448166439e15667ff5f987df3770045499d49a8d2ca72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
