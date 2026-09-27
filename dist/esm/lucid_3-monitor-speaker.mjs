export const name="lucid_3-monitor-speaker";
export const id="dl_255bedd8f77349cea81e";
export const url=new URL("../icons/lucid_3-monitor-speaker.svg?v=d7e256fa248bfd7848654def192e05e0bcf7d006aaeebaa957a39b3059f17039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
