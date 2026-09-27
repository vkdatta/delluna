export const name="audio_file";
export const id="dl_0c1d40f183f0264e1190";
export const url=new URL("../icons/audio_file.svg?v=628f1e14e4bcd2da49a04405a5fb2e1a13e0ad40f9ad8d0123978cd729dfea9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
