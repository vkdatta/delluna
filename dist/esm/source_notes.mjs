export const name="source_notes";
export const id="dl_071a8de6d30e4b671258";
export const url=new URL("../icons/source_notes.svg?v=3fe192b11899818325ec585d8d07d8aa4831be6efbb4048d0cf72526e4053130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
