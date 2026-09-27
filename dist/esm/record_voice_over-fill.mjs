export const name="record_voice_over-fill";
export const id="dl_7964507b804f6bfefbaa";
export const url=new URL("../icons/record_voice_over-fill.svg?v=625228b22b7935b2396c6d96cb0d90c085f4e8eff816a4966f446c5ace5a968d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
