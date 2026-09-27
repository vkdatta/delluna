export const name="microphone-light";
export const id="dl_33f9f9fa7fea457eb481";
export const url=new URL("../icons/microphone-light.svg?v=eaaa8d782de58348341d546b5e7ebb0c6796c2c3ceebc6cfe38c1da0e4c0c3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
